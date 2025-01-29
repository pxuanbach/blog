"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[7019],{8382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(4848),a=n(8453);const r={slug:"essential-modules-for-developing-applications-with-fastapi-p6-monitoring",title:"Essential modules for developing applications with FastAPI (P6 - Monitoring)",authors:["pxuanbach"],tags:["fastapi","python","monitoring","grafana","prometheus","essential-modules-fastapi"],date:"2024-09-02T10:00",image:"/img/10_essential-modules-for-developing-applications-with-fastapi-p6/featured.png"},i=void 0,o={permalink:"/blog/essential-modules-for-developing-applications-with-fastapi-p6-monitoring",source:"@site/blog/10_essential-modules-for-developing-applications-with-fastapi-p6/index.md",title:"Essential modules for developing applications with FastAPI (P6 - Monitoring)",description:"Hello, FastAPI and I are here to see you again. Over the past week, I started onboarding at a new company, joined a new environment, and met new people, which made me really excited.",date:"2024-09-02T10:00:00.000Z",tags:[{label:"fastapi",permalink:"/blog/tags/fastapi"},{label:"python",permalink:"/blog/tags/python"},{label:"monitoring",permalink:"/blog/tags/monitoring"},{label:"grafana",permalink:"/blog/tags/grafana"},{label:"prometheus",permalink:"/blog/tags/prometheus"},{label:"essential-modules-fastapi",permalink:"/blog/tags/essential-modules-fastapi"}],readingTime:4.98,hasTruncateMarker:!0,authors:[{name:"Bach Pham",title:"Software Engineer",url:"https://github.com/pxuanbach",imageURL:"https://avatars.githubusercontent.com/u/55500268?v=4",key:"pxuanbach"}],frontMatter:{slug:"essential-modules-for-developing-applications-with-fastapi-p6-monitoring",title:"Essential modules for developing applications with FastAPI (P6 - Monitoring)",authors:["pxuanbach"],tags:["fastapi","python","monitoring","grafana","prometheus","essential-modules-fastapi"],date:"2024-09-02T10:00",image:"/img/10_essential-modules-for-developing-applications-with-fastapi-p6/featured.png"},unlisted:!1,prevItem:{title:"Happy New Year 2025",permalink:"/blog/happy-new-year-2025"},nextItem:{title:"Essential modules for developing applications with FastAPI (P5 - Rate-limiting)",permalink:"/blog/essential-modules-for-developing-applications-with-fastapi-p5-rate-limiting"}},l={authorsImageUrls:[void 0]},c=[{value:"<strong>Framework/Library version</strong>",id:"frameworklibrary-version",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Integrating with FastAPI",id:"integrating-with-fastapi",level:3},{value:"Setting up Prometheus and Grafana services",id:"setting-up-prometheus-and-grafana-services",level:3},{value:"Configuring Grafana Dashboard",id:"configuring-grafana-dashboard",level:3},{value:"Notes",id:"notes",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Hello, FastAPI and I are here to see you again. Over the past week, I started onboarding at a new company, joined a new environment, and met new people, which made me really excited."}),"\n",(0,s.jsx)(t.p,{children:"Getting straight to today's main topic, I will introduce a module that integrates with FastAPI, which helps us track the statistics of each API in the application."}),"\n",(0,s.jsx)(t.h2,{id:"frameworklibrary-version",children:(0,s.jsx)(t.strong,{children:"Framework/Library version"})}),"\n",(0,s.jsxs)(t.p,{children:["This project uses ",(0,s.jsx)(t.a,{href:"https://www.python.org/",children:"Python"})," 3.10 as the environment and ",(0,s.jsx)(t.a,{href:"https://python-poetry.org/",children:"Poetry"})," as the package manager."]}),"\n",(0,s.jsx)(t.p,{children:"The code and examples in this post will use frameworks/libraries with the following versions."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[tool.poetry.dependencies]\r\npython = "^3.10"\r\nuvicorn = {extras = ["standard"], version = "^0.24.0.post1"}\r\nfastapi = "^0.109.1"\r\npython-multipart = "^0.0.7"\r\nemail-validator = "^2.1.0.post1"\r\npasslib = {extras = ["bcrypt"], version = "^1.7.4"}\r\ntenacity = "^8.2.3"\r\npydantic = ">2.0"\r\nemails = "^0.6"\r\ngunicorn = "^21.2.0"\r\njinja2 = "^3.1.2"\r\nalembic = "^1.12.1"\r\npython-jose = {extras = ["cryptography"], version = "^3.3.0"}\r\nhttpx = "^0.25.1"\r\npsycopg = {extras = ["binary"], version = "^3.1.13"}\r\n\r\nsqlmodel = "^0.0.16"\r\n\r\n# Pin bcrypt until passlib supports the latest\r\nbcrypt = "4.0.1"\r\npydantic-settings = "^2.2.1"\r\nsentry-sdk = {extras = ["fastapi"], version = "^1.40.6"}\r\npsycopg2 = "^2.9.9"\r\nasyncpg = "^0.29.0"\r\nredis = {extras = ["hiredis"], version = "^5.0.3"}\r\norjson = "^3.10.0"\r\napscheduler = "^3.10.4"\r\nprometheus-fastapi-instrumentator = "^7.0.0"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,s.jsx)(t.p,{children:"I am confident that this is one of the most important modules when you want to deploy a product to a production environment."}),"\n",(0,s.jsxs)(t.p,{children:["Currently, many packages can help you monitor your FastAPI app. The package I like to use the most is ",(0,s.jsx)(t.a,{href:"https://github.com/trallnag/prometheus-fastapi-instrumentator",children:"Prometheus FastAPI Instrumentator"})," (919 stars, 83 forks on 03/09/2024). I often use it along with Prometheus and Grafana, creating visual dashboards from those metrics helps me easily monitor the application. I will discuss this stack in another article."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"fastapi-instrumentator-prometheus.jpg",src:n(676).A+"",width:"1046",height:"347"})}),"\n",(0,s.jsx)(t.p,{children:"How it\u2019s work?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The API server exports an endpoint ",(0,s.jsx)(t.code,{children:"/metrics"}),", which tracks the HTTP request count, request/response size in bytes, request duration, and more."]}),"\n",(0,s.jsxs)(t.li,{children:["We register the ",(0,s.jsx)(t.code,{children:"/metrics"})," endpoint and set the crawl job duration for the Prometheus service. Next, this service automatically ingests metrics data from the API server, storing the collected data for analysis."]}),"\n",(0,s.jsx)(t.li,{children:"Grafana acts as an admin dashboard, retrieving data from Prometheus and visualizing it in specialized graphs, such as time-series, line charts."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Let's integrate this package with FastAPI and deploy Prometheus and Grafana to visualize its metrics."}),"\n",(0,s.jsx)(t.h3,{id:"integrating-with-fastapi",children:"Integrating with FastAPI"}),"\n",(0,s.jsx)(t.p,{children:"We need to initialize an instance of the instrumentator and export it when the application starts."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'{3,8,19-23} showLineNumbers title="./app/main.py"',children:'from fastapi import FastAPI\r\nfrom contextlib import asynccontextmanager\r\nfrom prometheus_fastapi_instrumentator import Instrumentator\r\n\r\n@asynccontextmanager\r\nasync def lifespan(app: FastAPI):\r\n    # start up\r\n    instrumentator.expose(app)\r\n    yield\r\n    # shut down\r\n    pass\r\n\r\napp = FastAPI(\r\n    title=settings.PROJECT_NAME,\r\n    openapi_url=f"{settings.API_STR}{settings.API_VERSION_STR}/openapi.json",\r\n    generate_unique_id_function=custom_generate_unique_id,\r\n    lifespan=lifespan\r\n)\r\ninstrumentator = Instrumentator(\r\n    should_group_status_codes=False,\r\n    should_ignore_untemplated=True,\r\n    excluded_handlers=[".*admin.*", "/metrics"],\r\n).instrument(app)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After initializing and running the application, you can easily find monitoring metrics at the ",(0,s.jsx)(t.code,{children:"/metrics"})," endpoint."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"metrics-api-result.png",src:n(9763).A+"#center",width:"864",height:"597"})}),"\n",(0,s.jsx)(t.h3,{id:"setting-up-prometheus-and-grafana-services",children:"Setting up Prometheus and Grafana services"}),"\n",(0,s.jsx)(t.p,{children:"To quickly see the results, I recommend that you simply copy and paste as instructed in this section."}),"\n",(0,s.jsxs)(t.p,{children:["First, create a ",(0,s.jsx)(t.code,{children:"docker-compose.yaml"})," file like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'showLineNumbers title="./monitoring/docker-compose.yaml"',children:"services:\r\n  prometheus:\r\n    image: prom/prometheus:v2.54.0\r\n    volumes:\r\n      - ./prometheus.yaml:/etc/prometheus/prometheus.yml\r\n      - prometheus-data:/prometheus\r\n    command:\r\n      - '--config.file=/etc/prometheus/prometheus.yml'\r\n    restart: unless-stopped\r\n\r\n  grafana:\r\n    image: grafana/grafana:10.4.7\r\n    ports:\r\n      - \"3001:3000\"\r\n    volumes:\r\n      - grafana-data:/var/lib/grafana\r\n\r\nvolumes:\r\n  prometheus-data:\r\n  grafana-data:\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, create a ",(0,s.jsx)(t.code,{children:"prometheus.yaml"})," file in the same location."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'showLineNumbers {10} title="./monitoring/prometheus.yaml"',children:"global:\r\n  scrape_interval: 15s\r\n\r\nscrape_configs:\r\n  - job_name: fastapi\r\n    scrape_interval: 15s\r\n    scrape_timeout: 10s\r\n    metrics_path: '/metrics'\r\n    static_configs:\r\n    - targets: ['host.docker.internal:8000']\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You might be curious about the ",(0,s.jsx)(t.code,{children:"host.docker.internal"})," address. What is it?"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The reason for this is that Docker network works differently on Linux, Windows, and macOS."}),"\n",(0,s.jsx)(t.li,{children:"On Linux, Docker uses the system's built-in networking features."}),"\n",(0,s.jsxs)(t.li,{children:["But on Windows and macOS, Docker runs inside a virtual machine. Because of this, Windows and macOS need a special way for containers to talk to the host machine, which is why we use ",(0,s.jsx)(t.code,{children:"host.docker.internal"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Since my OS is Windows, I'm using it as the host for the Prometheus service so that it can call the FastAPI server, which is not containerized."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"connect-to-service-outside-docker-deamon",src:n(8303).A+"#center",width:"503",height:"443"})}),"\n",(0,s.jsx)(t.p,{children:"Now, docker compose up!"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker compose -f ./monitoring/docker-compose.yaml up -d\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"docker-compose-up-prometheus-grafana",src:n(1866).A+"#center",width:"553",height:"191"})}),"\n",(0,s.jsx)(t.h3,{id:"configuring-grafana-dashboard",children:"Configuring Grafana Dashboard"}),"\n",(0,s.jsxs)(t.p,{children:["Once the services are up and running, you will see logs for requests to the /metrics endpoint being generated every 15 seconds (the ",(0,s.jsx)(t.code,{children:"scrape_interval"})," of Prometheus)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"prometheus-crawl-metrics-api-logs",src:n(3178).A+"#center",width:"545",height:"195"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, open your browser and go to ",(0,s.jsx)(t.code,{children:"127.0.0.1:3001"}),"; the Grafana login page will appear. The default username and password are ",(0,s.jsx)(t.strong,{children:"admin"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["After logging in, add Prometheus as a Data source with the connection URL set to ",(0,s.jsx)(t.code,{children:"http://prometheus:9090"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Why is ",(0,s.jsx)(t.code,{children:"prometheus:9090"}),"?"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Containers with a shared Docker Compose configuration can communicate with each other using the service name as the domain."}),"\n",(0,s.jsx)(t.li,{children:"9090 is the default port of the Prometheus service."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"save-and-test-prometheus-successfully",src:n(2408).A+"#center",width:"954",height:"280"})}),"\n",(0,s.jsx)(t.p,{children:'Back to Home, click \u201cCreate your first dashboard\u201d > "Import a dashboard\u201d. You will see the following screen.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"import-grafana-dashboard",src:n(5854).A+"#center",width:"1166",height:"903"})}),"\n",(0,s.jsxs)(t.p,{children:["You can easily find the ",(0,s.jsx)(t.a,{href:"https://github.com/pxuanbach/fastapi-essential-modules/blob/module/monitoring/monitoring/dashboard.json",children:(0,s.jsx)(t.code,{children:"dashboard.json"})})," file in my github repository. Import that file and see the result."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"grafana-fastapi-dashboard",src:n(4943).A+"#center",width:"1902",height:"913"})}),"\n",(0,s.jsx)(t.p,{children:"Niceee!!!"}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.p,{children:"These are not all the statistics that need to be tracked. In the real world, we need to track many more statistics, such as logs, RAM usage, CPU usage, total connections used, etc. However, for the scope of this article, this is enough to show you how we can monitor a FastAPI application."}),"\n",(0,s.jsx)(t.p,{children:"Additionally, I would like to mention the use of packages that help monitor the application. These packages also consume resources to monitor the system, and they can become a performance bottleneck for the application. Always use it carefully, so you don't get into a mess."}),"\n",(0,s.jsx)(t.p,{children:"Furthermore, you can also refer to a few other libraries such as\u2026"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/stephenhillier/starlette_exporter",children:"stephenhillier/starlette_exporter"})," (310 stars, 35 forks on 03/09/2024)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/perdy/starlette-prometheus",children:"perdy/starlette-prometheus"})," (272 stars, 31 forks on 03/09/2024)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/acidjunk/starlette-opentracing",children:"acidjunk/starlette-opentracing"})," (66 stars, 6 forks on 03/09/2024)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi",children:"open-telemetry/opentelemetry-instrumentation-fastapi"})," (###)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["I hope this post was useful. If you need a project to run a demo on your environment, here is my\xa0",(0,s.jsx)(t.a,{href:"https://github.com/pxuanbach/fastapi-essential-modules/tree/module/monitoring",children:"Git repository"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"See you again!"}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://github.com/Kludex/fastapi-prometheus-grafana?tab=readme-ov-file",children:["Kludex/fastapi-prometheus-grafana: FasAPI + Prometheus + Grafana! ","\ud83c\udf89"," (github.com)"]})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8303:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/connect-to-service-outside-docker-deamon-42d1d6da75dbe641c6d5530e6027e4d2.png"},1866:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/docker-compose-up-prometheus-grafana-1fbe1ac3e7929309b8ae72b538f850af.png"},676:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/fastapi-instrumentator-prometheus-450322bbbf007dac79a07d69bc05a419.jpg"},4943:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/grafana-fastapi-dashboard-5c4a02c182bcde2bdec9e991a1f42293.png"},5854:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/import-grafana-dashboard-5831f7ea5268c284f186012153268809.png"},9763:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/metrics-api-result-cdacd4f72250ce179b21aee3bd6926bd.png"},3178:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/prometheus-crawl-metrics-api-logs-e89c8d8a2dd353b7f048988d720f79c8.png"},2408:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/save-and-test-prometheus-successfully-63f3629489eec63e856cec8816fb9d73.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);