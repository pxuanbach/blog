"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[3300],{7217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(4848),r=n(8453);const i={slug:"essential-modules-for-developing-applications-with-fastapi-p4-job-scheduler",title:"Essential modules for developing applications with FastAPI (P4 - Job Scheduler)",authors:["pxuanbach"],tags:["fastapi","apscheduler","job-scheduler","python","essential-modules-fastapi"],date:"2024-07-28T10:00",image:"/img/02_essential-modules-for-developing-applications-with-fastapi-p1/featured.png"},o=void 0,a={permalink:"/blog/essential-modules-for-developing-applications-with-fastapi-p4-job-scheduler",source:"@site/blog/08_essential-modules-for-developing-applications-with-fastapi-p4/index.md",title:"Essential modules for developing applications with FastAPI (P4 - Job Scheduler)",description:"Welcome back!",date:"2024-07-28T10:00:00.000Z",tags:[{label:"fastapi",permalink:"/blog/tags/fastapi"},{label:"apscheduler",permalink:"/blog/tags/apscheduler"},{label:"job-scheduler",permalink:"/blog/tags/job-scheduler"},{label:"python",permalink:"/blog/tags/python"},{label:"essential-modules-fastapi",permalink:"/blog/tags/essential-modules-fastapi"}],readingTime:8.74,hasTruncateMarker:!0,authors:[{name:"Bach Pham",title:"Software Engineer",url:"https://github.com/pxuanbach",imageURL:"https://avatars.githubusercontent.com/u/55500268?v=4",key:"pxuanbach"}],frontMatter:{slug:"essential-modules-for-developing-applications-with-fastapi-p4-job-scheduler",title:"Essential modules for developing applications with FastAPI (P4 - Job Scheduler)",authors:["pxuanbach"],tags:["fastapi","apscheduler","job-scheduler","python","essential-modules-fastapi"],date:"2024-07-28T10:00",image:"/img/02_essential-modules-for-developing-applications-with-fastapi-p1/featured.png"},unlisted:!1,prevItem:{title:"Essential modules for developing applications with FastAPI (P5 - Rate-limiting)",permalink:"/blog/essential-modules-for-developing-applications-with-fastapi-p5-rate-limiting"},nextItem:{title:"Asynchronous Request Batching Design Pattern in Node.js",permalink:"/blog/asynchronous-request-batching-design-pattern-in-nodejs"}},l={authorsImageUrls:[void 0]},d=[{value:"Framework/Library version",id:"frameworklibrary-version",level:2},{value:"Job Scheduler",id:"job-scheduler",level:2},{value:"Install",id:"install",level:3},{value:"Prepare before coding",id:"prepare-before-coding",level:3},{value:"Create a Scheduler instance",id:"create-a-scheduler-instance",level:3},{value:"Integration with FastAPI",id:"integration-with-fastapi",level:3},{value:"Build Job Creation API",id:"build-job-creation-api",level:3},{value:"Schema/Model",id:"schemamodel",level:4},{value:"API Logic",id:"api-logic",level:4},{value:"Get All Jobs API",id:"get-all-jobs-api",level:3},{value:"Delete Job API",id:"delete-job-api",level:3},{value:"Let&#39;s see the results",id:"lets-see-the-results",level:2},{value:"Notes",id:"notes",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Welcome back!"}),"\n",(0,s.jsx)(t.p,{children:"In part 4 of our series, we delve deeper into essential tools that streamline development and enhance functionality. Let's dive in!"}),"\n",(0,s.jsx)(t.h2,{id:"frameworklibrary-version",children:"Framework/Library version"}),"\n",(0,s.jsxs)(t.p,{children:["This project uses ",(0,s.jsx)(t.a,{href:"https://www.python.org/",children:"Python"})," 3.10 as the environment and ",(0,s.jsx)(t.a,{href:"https://python-poetry.org/",children:"Poetry"})," as the package manager."]}),"\n",(0,s.jsx)(t.p,{children:"The code and examples in this post will use frameworks/libraries with the following versions."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",metastring:'showLineNumbers title="./pyproject.toml"',children:'[tool.poetry.dependencies]\r\npython = "^3.10"\r\nuvicorn = {extras = ["standard"], version = "^0.24.0.post1"}\r\nfastapi = "^0.109.1"\r\npython-multipart = "^0.0.7"\r\nemail-validator = "^2.1.0.post1"\r\npasslib = {extras = ["bcrypt"], version = "^1.7.4"}\r\ntenacity = "^8.2.3"\r\npydantic = ">2.0"\r\nemails = "^0.6"\r\ngunicorn = "^21.2.0"\r\njinja2 = "^3.1.2"\r\nalembic = "^1.12.1"\r\npython-jose = {extras = ["cryptography"], version = "^3.3.0"}\r\nhttpx = "^0.25.1"\r\npsycopg = {extras = ["binary"], version = "^3.1.13"}\r\n\r\nsqlmodel = "^0.0.16"\r\n\r\n# Pin bcrypt until passlib supports the latest\r\nbcrypt = "4.0.1"\r\npydantic-settings = "^2.2.1"\r\nsentry-sdk = {extras = ["fastapi"], version = "^1.40.6"}\r\npsycopg2 = "^2.9.9"\r\nasyncpg = "^0.29.0"\r\nredis = {extras = ["hiredis"], version = "^5.0.3"}\r\norjson = "^3.10.0"\r\napscheduler = "^3.10.4"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"job-scheduler",children:"Job Scheduler"}),"\n",(0,s.jsx)(t.p,{children:"In the real world, the Job Scheduler module stands out as a fundamental tool for automating tasks and managing scheduled activities within web applications. FastAPI, with its asynchronous capabilities, integrates seamlessly with Job Scheduler modules, allowing efficient automation of recurring tasks."}),"\n",(0,s.jsx)(t.p,{children:"I will introduce a library that I am using to build this module for my applications. It offers many options, powerful features, and operates flexibly."}),"\n",(0,s.jsxs)(t.p,{children:["It's ",(0,s.jsx)(t.a,{href:"https://github.com/agronholm/apscheduler",children:"APScheduler"})," (6k stars, 693 forks on 28/07/2024). If you are wondering why, the answer comes from a ticket in my job, which required adding a feature to schedule certain tasks during the day in the FastAPI application. Then, I wandered through various blogs, forums, and stopped at a ",(0,s.jsx)(t.a,{href:"https://github.com/tiangolo/fastapi/discussions/9143",children:"discussion"})," in the FastAPI repository. Many libraries were mentioned, and then I stopped ",(0,s.jsx)(t.a,{href:"https://github.com/tiangolo/fastapi/discussions/9143#discussioncomment-5157569",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This library supports job storage with SQLAlchemy (",(0,s.jsx)(t.code,{children:"SQLAlchemyJobStore"}),") and job scheduling with asyncio (",(0,s.jsx)(t.code,{children:"AsyncIOScheduler"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"This library has three built-in scheduling systems"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Cron-style scheduling (with optional start/end times)"}),"\n",(0,s.jsx)(t.li,{children:"Interval-based execution (runs jobs on even intervals, with optional start/end times)"}),"\n",(0,s.jsx)(t.li,{children:"One-off delayed execution (runs jobs once, on a set date/time)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"So, we can organize the module flexibly to take advantage of those benefits."}),"\n",(0,s.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.p,{children:"First, we should install the APScheduler package."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"poetry add apscheduler   # pip install apscheduler\n"})}),"\n",(0,s.jsx)(t.h3,{id:"prepare-before-coding",children:"Prepare before coding"}),"\n",(0,s.jsx)(t.p,{children:"Because APScheduler provides flexibility in adding and removing jobs at runtime, I usually build it as a regular entity in the system. That means there will be APIs performing CRD operations for it (no need for U - Update, because we only need to delete and re-add that job back into the system)."}),"\n",(0,s.jsxs)(t.p,{children:["We will have a separate database to store jobs, typically I will use SQLite or PostgreSQL. It's lightweight and compatible with SQLAlchemy (",(0,s.jsx)(t.code,{children:"SQLAlchemyJobStore"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["In practice, I almost exclusively work with tasks that use ",(0,s.jsx)(t.code,{children:"cron"})," or ",(0,s.jsx)(t.code,{children:"interval"})," triggers. I rarely use ",(0,s.jsx)(t.code,{children:"date"}),". However, for the sake of completeness in this article, I will also write APIs to support it."]}),"\n",(0,s.jsx)(t.h3,{id:"create-a-scheduler-instance",children:"Create a Scheduler instance"}),"\n",(0,s.jsx)(t.p,{children:"In the first steps, we just need to declare an instance representing the Scheduler."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers title="./app/core/scheduler.py"',children:"from apscheduler.schedulers.asyncio import AsyncIOScheduler\r\nfrom apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore\r\nfrom app.core.config import settings\r\n\r\njobstores = { 'default': SQLAlchemyJobStore(url=settings.JOB_DATABASE_URI) }\r\nscheduler = AsyncIOScheduler(jobstores=jobstores)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"integration-with-fastapi",children:"Integration with FastAPI"}),"\n",(0,s.jsx)(t.p,{children:"We also use the lifespan function to manage the lifecycle of the scheduler instance."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers {9,18} title="./app/main.py"',children:'from fastapi import FastAPI\r\nfrom contextlib import asynccontextmanager\r\nfrom app.core.scheduler import scheduler\r\n\r\n@asynccontextmanager\r\nasync def lifespan(app: FastAPI):\r\n    # start up\r\n    try:\r\n        scheduler.start() \r\n    except Exception as e:    \r\n        logging.error("Unable to Create Schedule Object - [%s]", str(e))   \r\n    yield\r\n    # shut down\r\n    scheduler.shutdown()\r\n    \r\napp = FastAPI(\r\n    title=settings.PROJECT_NAME,\r\n    lifespan=lifespan\r\n)\n'})}),"\n",(0,s.jsx)(t.p,{children:"When running the project, you will see the log printed on the console as follows:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Startup Log",src:n(1033).A+"",width:"708",height:"156"})}),"\n",(0,s.jsx)(t.p,{children:"This is just the warm-up part, now let's move on to the main part."}),"\n",(0,s.jsx)(t.h3,{id:"build-job-creation-api",children:"Build Job Creation API"}),"\n",(0,s.jsx)(t.p,{children:"First of all, initialize an APIRouter instance and register it in the FastAPI application."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers title="./app/api/jobs.py"',children:'import logging\r\nfrom fastapi import APIRouter, HTTPException, Request, BackgroundTasks, status\r\n\r\nrouter = APIRouter(prefix="/jobs")\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers {4} title="./app/api/__init__.py"',children:'from fastapi import APIRouter\r\nfrom app.api import user, utils, jobs\r\n...\r\nrouter.include_router(jobs.router, tags=["Job"])\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now, let's talk about the interesting things about job creation API. As mentioned above, we will create an API to be able to create a new job while the application is running."}),"\n",(0,s.jsx)(t.h4,{id:"schemamodel",children:"Schema/Model"}),"\n",(0,s.jsx)(t.p,{children:"The payload schema would look as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers title="./app/models/job.py"',children:'from datetime import datetime\r\nfrom typing import Any, List, Literal, Optional, Union\r\nfrom sqlmodel import SQLModel\r\n\r\nclass CronArgs(SQLModel):\r\n    year: Optional[str] = "*"\r\n    month: Optional[str] = "*"\r\n    day: Optional[str] = "*" \r\n    week: Optional[str] = "*"\r\n    day_of_week: Optional[str] = "*"\r\n    hour: Optional[str] = "*"\r\n    minute: Optional[str] = "*"\r\n    second: Optional[str] = "5"\r\n\r\nclass IntervalArgs(SQLModel):\r\n    seconds: Optional[int] = 10\r\n    minutes: Optional[int] = None\r\n    hours: Optional[int] = None\r\n    days: Optional[int] = None\r\n    weeks: Optional[int] = None\r\n\r\nclass DateArgs(SQLModel):\r\n    args: List[Any] = []\r\n    run_date: datetime = datetime.now()\r\n\r\nclass JobCreate(SQLModel):\r\n    job_id: str\r\n    from_file: bool = True\r\n    type: Literal[\'cron\', \'interval\', \'date\'] = \'cron\'\r\n    args: Optional[Union[DateArgs, IntervalArgs, CronArgs]] = None\n'})}),"\n",(0,s.jsx)(t.p,{children:"In this example, the API can create all 3 types of jobs simultaneously, so I designed it as above. However, it might be beneficial to decouple these functionalities for improved maintainability and extensibility."}),"\n",(0,s.jsx)(t.h4,{id:"api-logic",children:"API Logic"}),"\n",(0,s.jsx)(t.p,{children:"Next, let's take a quick look at this code snippet."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers {4-6,10-31,35,37-42} title="./app/api/jobs.py"',children:'@router.post("", response_model=JobCreateDeleteResponse)\r\nasync def add_job_to_scheduler(obj_in: JobCreate) -> JobCreateDeleteResponse:\r\n    # Find job folder\r\n    job_folder = path.join("app", settings.JOB_DIR, obj_in.job_id)\r\n    if not path.exists(job_folder):\r\n        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job folder not found.")\r\n    \r\n    _timers = obj_in.args\r\n    # Get timer parameters if `.schedule` file exists\r\n    if obj_in.from_file:\r\n        _timers = {}\r\n        _sched_path = path.join(job_folder, ".schedule")\r\n        if not path.exists(_sched_path):\r\n            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Schedule file not found")\r\n\r\n        # read parameters from `.schedule` file\r\n        sched = read_file_line_by_line(_sched_path)\r\n        for i in range(len(sched)):\r\n            if i == 0 or str(sched[i]).startswith(\'#\') or sched[i] == \'\' or sched[i] is None:\r\n                continue \r\n            _interval_timer = str(sched[i]).split("=")\r\n            _timers.update({_interval_timer[0]: _interval_timer[1]})\r\n    # Get cron-job timer parameters if type equals "cron"\r\n    if obj_in.type == "cron":\r\n        _timers = CronArgs.model_validate(_timers)\r\n    # Get interval-job timer parameters if type equals "interval"\r\n    elif obj_in.type == "interval":\r\n        _timers = IntervalArgs.model_validate(_timers)\r\n    # Get date-off job timer parameters if type equals "date"\r\n    elif obj_in.type == "date":\r\n        _timers = DateArgs.model_validate(_timers)\r\n\r\n    # find job module in `./app/jobs` folder, \r\n    # register the `call` function inside the module to the scheduler with timer parameters\r\n    _job_module = importlib.import_module(f"app.jobs.{obj_in.job_id}.main")\r\n    try:\r\n        job = scheduler.add_job(\r\n            _job_module.call, \r\n            obj_in.type, \r\n            id=obj_in.job_id,\r\n            **_timers.model_dump(exclude_none=True)\r\n        )\r\n    except ConflictingIdError:\r\n        logging.warning(f"Job {obj_in.job_id} already exists")\r\n        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Job already exists")\r\n    except Exception as e:\r\n        logging.error(f"Add job {obj_in.job_id} - {str(e)}")\r\n        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="An error occurred")\r\n    return JobCreateDeleteResponse(scheduled=True, job_id=job.id)\n'})}),"\n",(0,s.jsx)(t.p,{children:"How does it work?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["From line ",(0,s.jsx)(t.strong,{children:"4-6"}),", to register a job, we must define the job into ",(0,s.jsx)(t.code,{children:"./app/jobs"})," folder. The name of the job folder must be equal to the ",(0,s.jsx)(t.code,{children:"job_id"}),". For example:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Define Job in Jobs folder",src:n(2863).A+"",width:"793",height:"512"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["From line ",(0,s.jsx)(t.strong,{children:"10-31"}),", I provide 2 options to create a new job."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Register with ",(0,s.jsx)(t.code,{children:".schedule"})," file, this file will be placed in the job folder."]}),"\n",(0,s.jsx)(t.li,{children:"Register via API payload (Schema/Model) that I mentioned above."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In line ",(0,s.jsx)(t.strong,{children:"35"}),", import the module dynamically using ",(0,s.jsx)(t.code,{children:"job_id"})," via the ",(0,s.jsx)(t.code,{children:"importlib"})," library."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["From line ",(0,s.jsx)(t.strong,{children:"37-42"}),", try to register the job into the scheduler's job store."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"We will test it later. Next I will introduce the Get all jobs API."}),"\n",(0,s.jsx)(t.h3,{id:"get-all-jobs-api",children:"Get All Jobs API"}),"\n",(0,s.jsx)(t.p,{children:"This API is simpler than Job Creation API."}),"\n",(0,s.jsx)(t.p,{children:"The code will look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers {4} title="./app/api/jobs.py"',children:'@router.get("")\r\nasync def get_scheduled_jobs():\r\n    schedules = []\r\n    for job in scheduler.get_jobs():\r\n        schedules.append({\r\n            "job_id": str(job.id), \r\n            "run_frequency": str(job.trigger), \r\n            "next_run": str(job.next_run_time)\r\n        })\r\n    return { "total": len(schedules), "jobs": schedules }\n'})}),"\n",(0,s.jsx)(t.p,{children:"How does it work?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["It uses APScheduler\u2019s ",(0,s.jsx)(t.code,{children:"get_jobs"})," API to get all registered jobs."]}),"\n",(0,s.jsx)(t.li,{children:"Loop through all jobs to retrieve the necessary data."}),"\n",(0,s.jsx)(t.li,{children:"Returns total number of registered jobs and job information."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"delete-job-api",children:"Delete Job API"}),"\n",(0,s.jsxs)(t.p,{children:["Using the ",(0,s.jsx)(t.code,{children:"job_id"})," as a unique identifier, we will invoke the APScheduler\u2019s ",(0,s.jsx)(t.code,{children:"remove_job"})," API to delete the corresponding job from the job store."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers {4} title="./app/api/jobs.py"',children:'@router.delete("/{job_id}", response_model=JobCreateDeleteResponse)\r\nasync def remove_job_from_scheduler(job_id: str) -> JobCreateDeleteResponse:\r\n    try:\r\n        scheduler.remove_job(job_id)\r\n    except Exception as e:\r\n        logging.error(f"Delete job {job_id} - {str(e)}")\r\n        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, mdetail="Job deleted failed")\r\n    return JobCreateDeleteResponse(scheduled=False, job_id=job_id)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"lets-see-the-results",children:"Let's see the results"}),"\n",(0,s.jsxs)(t.p,{children:["I created some scripts in ",(0,s.jsx)(t.code,{children:"./tests"})," folder for testing."]}),"\n",(0,s.jsx)(t.p,{children:"For instance, a script will look like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'showLineNumbers title="./tests/job_scheduler/get_list_jobs.py"',children:'import requests\r\n\r\nurl = "http://localhost:8000/api/v1/jobs"\r\npayload = ""\r\nheaders = {\r\n    "Content-Type": "application/json",\r\n}\r\nresponse = requests.request("GET", url, data=payload, headers=headers)\r\n\r\nprint(response.text)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Let's see how our job scheduler looks like."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Test Create A New Cron-job",src:n(3254).A+"",width:"1388",height:"428"})}),"\n",(0,s.jsx)(t.p,{children:"First, I create a cron-job and look at the logs. As you can see, the job has been successfully registered in the job store and runs every 10 seconds."}),"\n",(0,s.jsxs)(t.p,{children:["Now, delete it using the ",(0,s.jsx)(t.code,{children:"delete_job.py"})," script and create an interval job."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Test Delete, Create A New Interval Job, Get Jobs",src:n(207).A+"",width:"1406",height:"407"})}),"\n",(0,s.jsxs)(t.p,{children:["Wow, it\u2019s work. Then test the Get all jobs API using ",(0,s.jsx)(t.code,{children:"get_list_jobs.py"})," script. We can see it prints to the console that we have a total of 1 job in the job store."]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.p,{children:"In addition to the benefits it brings, we also need to pay attention to a few other things:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The use of an in-app scheduler can lead to higher resource consumption by the application, and it generates a larger amount of logs, which can make error tracking more challenging. To address this issue, you can separate it into a dedicated application specifically for executing scheduled jobs. Your main application can call the job scheduler app via HTTP, GRPC, etc., to register jobs into the job store."}),"\n",(0,s.jsxs)(t.li,{children:["Beyond ",(0,s.jsx)(t.code,{children:"AsyncIOScheduler"}),", APScheduler offers a variety of job schedulers and storage options. Explore the documentation to select the optimal tool for your system. ",(0,s.jsx)(t.a,{href:"https://apscheduler.readthedocs.io/en/3.x/userguide.html#choosing-the-right-scheduler-job-store-s-executor-s-and-trigger-s",children:"https://apscheduler.readthedocs.io/en/3.x/userguide.html#choosing-the-right-scheduler-job-store-s-executor-s-and-trigger-s"})]}),"\n",(0,s.jsxs)(t.li,{children:["To avoid your scheduler consuming a lot of database connections, try to limit the number of concurrent executions. ",(0,s.jsx)(t.a,{href:"https://apscheduler.readthedocs.io/en/3.x/userguide.html#limiting-the-number-of-concurrently-executing-instances-of-a-job",children:"https://apscheduler.readthedocs.io/en/3.x/userguide.html#limiting-the-number-of-concurrently-executing-instances-of-a-job"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Some packages that you may be interested in:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/celery/celery",children:"celery/celery: Distributed Task Queue (development branch) (github.com)"})," (24.2k stars, 4.6k forks on 28/07/2024)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/samuelcolvin/arq",children:"samuelcolvin/arq (github.com)"})," (2k stars, 170 forks on 28/07/2024) - ",(0,s.jsxs)(t.em,{children:["The author is the creator of ",(0,s.jsx)(t.a,{href:"https://github.com/pydantic/pydantic",children:"Pydantic"}),", an important module integrated with FastAPI."]})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/dmontagu/fastapi-utils",children:"dmontagu/fastapi-utils (github.com)"})," (1.8k stars, 163 forks on 28/07/2024)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/aio-libs/aiojobs",children:"aio-libs/aiojobs (github.com)"})," (821 stars, 66 forks on 28/07/2024)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/madkote/fastapi-plugins",children:"madkote/fastapi-plugins (github.com)"})," (355 stars, 19 forks on 28/07/2024)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["I hope this post was useful. If you need a project to run a demo on your environment, here is my\xa0",(0,s.jsx)(t.a,{href:"https://github.com/pxuanbach/fastapi-essential-modules",children:"Git repository"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Have a great weekend!"}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://apscheduler.readthedocs.io/en/3.x/userguide.html",children:"https://apscheduler.readthedocs.io/en/3.x/userguide.html"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/tiangolo/fastapi/discussions/9143",children:"how can i run scheduling tasks using fastapi's \xb7 tiangolo/fastapi \xb7 Discussion #9143 (github.com)"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2863:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/define-job-in-jobs-folder-3ae89d2adb8e139035efb7b2c5808aa4.png"},1033:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/start-up-log-6516261ca84dd3198a132fa4c391e1b4.png"},3254:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/test-create-cron-job-f119bb8ad0592714b93e96b809bfb9fb.png"},207:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/test-delete-create-get-jobs-45470fa5a5cad132893fa0c9ec57b85f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);