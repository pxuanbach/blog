---
slug: essential-modules-for-developing-applications-with-fastapi-p5-rate-limiting
title: Essential modules for developing applications with FastAPI (P5 - Rate-limiting)
authors: [pxuanbach]
tags: [fastapi, redis, rate-limit, python, essential-modules-fastapi]
date: 2024-08-15T10:00
image: /img/09_essential-modules-for-developing-applications-with-fastapi-p5/featured.png # static file
---

Another week has passed, how was your weekend? I am planning my future journey.

In this article, I will introduce you to a crucial module to protect your system. As the title of the article, it is about Rate-limiting. Let's explore how we can apply it to FastAPI!

<!--truncate-->

## **Framework/Library version**

This project uses [Python](https://www.python.org/) 3.10 as the environment and [Poetry](https://python-poetry.org/) as the package manager.

The code and examples in this post will use frameworks/libraries with the following versions.

```toml
[tool.poetry.dependencies]
python = "^3.10"
uvicorn = {extras = ["standard"], version = "^0.24.0.post1"}
fastapi = "^0.109.1"
python-multipart = "^0.0.7"
email-validator = "^2.1.0.post1"
passlib = {extras = ["bcrypt"], version = "^1.7.4"}
tenacity = "^8.2.3"
pydantic = ">2.0"
emails = "^0.6"
gunicorn = "^21.2.0"
jinja2 = "^3.1.2"
alembic = "^1.12.1"
python-jose = {extras = ["cryptography"], version = "^3.3.0"}
httpx = "^0.25.1"
psycopg = {extras = ["binary"], version = "^3.1.13"}

sqlmodel = "^0.0.16"

# Pin bcrypt until passlib supports the latest
bcrypt = "4.0.1"
pydantic-settings = "^2.2.1"
sentry-sdk = {extras = ["fastapi"], version = "^1.40.6"}
psycopg2 = "^2.9.9"
asyncpg = "^0.29.0"
redis = {extras = ["hiredis"], version = "^5.0.3"}
orjson = "^3.10.0"
apscheduler = "^3.10.4"
```

## Rate-limiting Overview

### What exactly is rate-limiting?

> Rate limiting is a strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe – for instance, trying to log in to an account. Rate limiting can help stop certain kinds of malicious [bot activity](https://www.cloudflare.com/learning/bots/what-is-a-bot/). It can also reduce strain on web servers.
> [*— By Cloud Flare —*](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/)

Besides, it also offers other benefits, such as monitoring API usage, enforcing API usage policies, and even implementing some business logic to differentiate customer permission levels.

There are many types of rate-limiting to meet various needs, including Fixed Window Counter, Sliding Window Counter, Token Bucket, and more. Additionally, rule limiting is also a topic of concern. I will introduce Fixed Window Counter rate-limiting in this article with an IP-based limiting mechanism.

### How does it work?

I'll give a few simple examples to describe how Rate-limit works; take a look at the image below:

![How It Work](./how-it-work.png#center)

Suppose we have a Client sending requests to a Server, and we set a rule on the Server to only accept 2 requests within 1 minute. Therefore, if more than 2 requests are sent from the Client, starting from the 3rd request, an error will occur and it will be responded to immediately.

Perhaps you are curious as to why the 1-minute time frame is not calculated from point **(1)** but rather from point **(2)**. To understand this, you'll need to learn about Rate-Limit algorithms. If the time were calculated from point **(1)** and I could successfully make 2 requests after 1 minute, that would be the Fixed Window Counter algorithm. I calculate the time from point **(2)** because I am applying the Sliding Window Counter algorithm.

**Fixed Window Counter algorithm** can be described as follows:

![Fixed Window Counter Example](./fixed-window-counter-example.png#center)

- We still use the 2 requests per minute rule.
- **R1** and **R2** belong to Frame 1, and both responded successfully. At this point, Server will count **R1** and **R2**, with count = 2.
- **R3** failed because Frame 1 reached limit (count = 2 = limit).
- **R5** and **R6** belong to Frame 2, and do the same with **R1**, **R2**.

**Sliding Window Counter algorithm** can be described as follows:

![Sliding Window Counter Example](./sliding-window-counter-example.png#center)

- **R1** was successful because Frame 1 had no previous requests. We store **R1** with time = 60.
- **R2** also executes successfully. Because in Frame 2, there is only 1 request, which is **R1** (count = 1). At this stage, we adds **R2** with time = 75 to cache.
- **R3** failed because Frame 3 reached limit. We will check how many requests have been stored from around 30 to 90. Oh, we have **R1** and **R2** with corresponding times of 60 and 75.
- **R4** was successful because Frame 4 only contains **R2** (count = 1). At this point, we will cache **R2** and **R4**.

### Prepare before coding

In [part 3 - caching](../05_essential-modules-for-developing-applications-with-fastapi-p3/index.md), we integrated Redis into our system. So I'm going to reuse it to store some stuff.

Now, let's find out what we are going to do.

In the API Server, I usually create a rate-limit module and treat it as middleware. First, the request will pass through the Rate-limit middleware, which will check whether this request is allowed to proceed to the next middleware or the execution layer.

![Request to Rate-limit Middleware](./request-to-rate-limit-middleware.png#center)

When working with FastAPI, we have many ways to implement this module. I can list a few methods as follows:

1. Take advantage of the Dependencies feature in FastAPI.
2. Use Python's decorator feature.
3. Build a middleware in the FastAPI application, similar in concept to Global Dependencies.

In this article, I choose option 1 for simplicity and efficiency. 

> “Simplicity is the soul of efficiency.” 😁
> 

Next, I will create a rate-limit class. It will be responsible for connecting to Redis and executing the algorithm to filter requests. Additionally, we'll need some helper functions to process the input data. Now, let's start coding!

## Implement Rate-limit module

### Initialize RateLimiter class

This is the core of this module. The RateLimiter class has the following constructor parameters:

```python {4-8} showLineNumbers title="./app/core/rate_limiter.py"
class RateLimiter():
    def __init__(
        self,
        rule: str,
        exception_message: str = "Too many Request!",
        exception_status: int = status.HTTP_429_TOO_MANY_REQUESTS,
        redis: RedisClient = redis_client,
        lua_script: str = SLIDING_WINDOW_COUNTER
    ) -> None:
        (
            self.limit,  # count requests in duration time
            self.duration_in_second
        ) = retrieve_rule(rule)
        self.exp_message = exception_message
        self.exp_status = exception_status
        if redis_client:
            self.redis_client = redis
        self.lua_script = lua_script
        self.lua_sha = ""
```

- rule (str): This is the parameter that takes the filtering rule for the API. For example, `5/15s` .
- exception_message (str): An optional parameter to customize the error message sent when a request violates the rule. Default, `Too many Request!`.
- exception_status (int): An optional parameter to customize the error status code sent when a request violates the rule. Default, `429`.
- redis (RedisClient): An optional parameter to change the Redis instance used.
- lua_script (str): An optional parameter to change the script running the algorithm on the Redis server. You can find it on [Sliding Window Rate Limiting app using ASP.NET (redis.io)](https://redis.io/learn/develop/dotnet/aspnetcore/rate-limiting/sliding-window#sliding-window-rate-limiter-lua-script).

There are some functions and information you might be curious about. Don’t worry, I will explain them in the next section.

### RateLimiter execution function

Since we are defining a class, it operates within Dependencies based on the `__call__` method.

```python {4,7,9-13,15-17} showLineNumbers title="./app/core/rate_limiter.py"
class RateLimiter():
    ...
    async def __call__(self, request: Request) -> Any:
        if not await self.redis_client.ping():
            raise RedisUnavailableException

        key = self.req_key_builder(request)

        try:
            is_valid = await self.check(key)
        except NoScriptError:
            self.lua_sha = await self.redis_client.load_script(self.lua_script)
            is_valid = await self.check(key)

        if is_valid == 0:
            return True
        raise HTTPException(status_code=self.exp_status, detail=self.exp_message)
```

In this function, it performs 4 steps:

1. In line **4**, ensure the server is connected to Redis.
2. In line **7**, create a key based on the incoming request. We will identify incoming requests based on request method, path and client IP. Example: `get:127.0.0.1:/api/v1/utils/limiting`
    
    ```python showLineNumbers title="./app/core/rate_limiter.py"
    class RateLimiter():
        ...
        @staticmethod
        def req_key_builder(req: Request, **kwargs):
            return ":".join([req.method.lower(), req.client.host, req.url.path])
    ```
    
3. From line **9-13**, call `check` method with key parameter created in the previous step. If the Lua script hasn't been loaded onto Redis, load it and then call `check` method again.
    
    ```python showLineNumbers title="./app/core/rate_limiter.py"
    class RateLimiter():
        ...	
        async def check(self, key: str, **kwargs):
            return await self.redis_client.evaluate_sha(
                self.lua_sha, 1, [key, str(self.duration_in_second), str(self.limit)]
            )
    ```
    
    It will make a call to the Redis server and get the result from executing the Lua script we loaded earlier into Redis.
    
4. From line **15-17**, get the result from the `check` method and perform the corresponding action.

### retrieve_rule function

This function simply takes a valid string and extracts the corresponding values. The desired outcome is to determine the number of requests allowed within a given time frame (in seconds).

```python showLineNumbers title="./app/core/rate_limiter.py"
PATTERN: Final[str] = "(\d+)\/((\d+)(s|m|h))+"

def retrieve_rule(rule: str):
    try:
        limit = re.search(PATTERN, rule).group(1)
        duration = re.search(PATTERN, rule).group(3)
        period = re.search(PATTERN, rule).group(4)
        limit = int(limit)
        duration = int(duration)
    except (re.error, AttributeError, ValueError):
        raise RetrieveRuleException
    
    if limit < 1 or duration < 0:
        raise LimitRuleException

    duration_in_s = duration    # second
    if period == "m":
        duration_in_s = duration * 60
    elif period == "h":
        duration_in_s = duration * 60 * 60
    return limit, duration_in_s
```

### Why use Lua scripts?

Basically, the execution of the algorithm will be handled by Redis, which reduces the load on the API Server when there is a large number of incoming requests. Additionally, it is faster than running the algorithm on the API Server.

Lua scripts block everything. You can't run two Lua scripts in parallel. So it ensures atomicity for our operations.

> The trick here is that everything needs to happen atomically, we want to be able to trim the set, check its cardinality, add an item to it, and set it's expiration, all without anything changing in the interim.
[— By Redis —](https://redis.io/learn/develop/dotnet/aspnetcore/rate-limiting/sliding-window#sliding-window-rate-limiter-lua-script)
> 

```lua showLineNumbers
local current_time = redis.call('TIME')
local trim_time = tonumber(current_time[1]) - ARGV[1]
redis.call('ZREMRANGEBYSCORE', KEYS[1], 0, trim_time)
local request_count = redis.call('ZCARD', KEYS[1])

if request_count < tonumber(ARGV[2]) then
    redis.call('ZADD', KEYS[1], current_time[1], current_time[1] .. current_time[2])
    redis.call('EXPIRE', KEYS[1], ARGV[1])
    return 0
end
return 1
```

## Testing

I created 2 APIs with Rate-limit middleware and 2 test scripts for it. The script will look like this:

```python showLineNumbers title="./tests/rate_limiting/test_rate_limit_1.py"
url = "http://localhost:8000/api/v1/utils/limiting1"
payload = ""

def send_request():
    now = datetime.now()
    response = requests.request("GET", url, data=payload)
    print(now, response.text)
    time.sleep(0.5)

# On my local machine, the request function take 2 seconds to get a response.
# Rule: 5/15s
send_request()  # R1 success at 2.5s, redis contains [R1]
send_request()  # R2 success at 5s, redis contains [R1, R2]
send_request()  # R3 success at 7.5s, redis contains [R1, R2, R3]
send_request()  # R4 success at 10s, redis contains [R1, R2, R3, R4]
send_request()  # R5 success at 12.5s, redis contains [R1, R2, R3, R4, R5]
send_request()  # R6 fails at 15s, redis contains [R1, R2, R3, R4, R5]
send_request()  # R7 success at 18.5s, redis contains [R2, R3, R4, R5, R7]
```

Now, let's see the results:

![Test results](./test-results.png#center)

API server logs:

![API Server Logs](./api-server-logs.png#center)

## Notes

Instead of Redis, you can implement a queue/map in your application to store request values. But consider the scalability of your system—implementing in-app queues or maps like this is no longer suitable and can lead to redundancy and resource waste. Therefore, if your application has non-functional requirements for scalability, consider using shared storage solutions like **Redis** ([Redis - The Real-time Data Platform](https://redis.io/)) or **Memcached** ([memcached - a distributed memory object caching system](https://memcached.org/)).

Additionally, to implement rate-limiting as middleware in API server, we can also implement it at **network layer**. This is also an interesting topic, and I hope to share more about it in other posts.

Some packages that you may be interested in:

- [laurentS/slowapi: A rate limiter for Starlette and FastAPI (github.com)](https://github.com/laurentS/slowapi) (1.1k stars, 72 forks on 18/08/2024)
- [long2ice/fastapi-limiter: A request rate limiter for fastapi (github.com)](https://github.com/long2ice/fastapi-limiter) (465 stars, 52 forks on 18/08/2024)

## Conclusion

We have explored some aspects of rate-limiting and how to implement it in FastAPI.

I hope this post was useful. If you need a project to run a demo on your environment, here is my [Git repository](https://github.com/pxuanbach/fastapi-essential-modules/tree/module/rate-limiting).

See you again!

## References

- [What is rate limiting? | Rate limiting and bots | Cloudflare](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/)
- [Rate limiting best practices · Cloudflare Web Application Firewall (WAF) docs](https://developers.cloudflare.com/waf/rate-limiting-rules/best-practices/)
- [How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis](https://redis.io/learn/develop/dotnet/aspnetcore/rate-limiting/sliding-window#sliding-window-rate-limiter-lua-script)
- [Redis and Lua Powered Sliding Window Rate Limiter (halodoc.io)](https://blogs.halodoc.io/taming-the-traffic-redis-and-lua-powered-sliding-window-rate-limiter-in-action/)
