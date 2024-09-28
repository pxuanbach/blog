"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[2817],{9475:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=o(4848),t=o(8453);const i={slug:"zero-downtime-deployment-with-docker-compose-nginx",title:"Zero-downtime Deployments with Docker Compose & Nginx",authors:["pxuanbach"],tags:["automation","deployment","docker","nginx","shell script"],date:"2024-03-24T10:00",image:"/img/01_zero-downtime-deployment-with-docker-compose-nginx/featured.png"},s=void 0,a={permalink:"/blog/zero-downtime-deployment-with-docker-compose-nginx",source:"@site/blog/01_zero-downtime-deployment-with-docker-compose-nginx/index.md",title:"Zero-downtime Deployments with Docker Compose & Nginx",description:"Hey, welcome to my blog!",date:"2024-03-24T10:00:00.000Z",tags:[{label:"automation",permalink:"/blog/tags/automation"},{label:"deployment",permalink:"/blog/tags/deployment"},{label:"docker",permalink:"/blog/tags/docker"},{label:"nginx",permalink:"/blog/tags/nginx"},{label:"shell script",permalink:"/blog/tags/shell-script"}],readingTime:4.495,hasTruncateMarker:!0,authors:[{name:"Bach Pham",title:"Software Engineer",url:"https://github.com/pxuanbach",imageURL:"https://avatars.githubusercontent.com/u/55500268?v=4",key:"pxuanbach"}],frontMatter:{slug:"zero-downtime-deployment-with-docker-compose-nginx",title:"Zero-downtime Deployments with Docker Compose & Nginx",authors:["pxuanbach"],tags:["automation","deployment","docker","nginx","shell script"],date:"2024-03-24T10:00",image:"/img/01_zero-downtime-deployment-with-docker-compose-nginx/featured.png"},unlisted:!1,prevItem:{title:"Essential modules for developing applications with FastAPI (P1 - Migration)",permalink:"/blog/essential-modules-for-developing-applications-with-fastapi-p1-migration"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration before applying",id:"configuration-before-applying",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Nginx",id:"nginx",level:3},{value:"Deployment process",id:"deployment-process",level:3},{value:"New configuration",id:"new-configuration",level:2},{value:"Docker Compose",id:"docker-compose-1",level:3},{value:"Nginx",id:"nginx-1",level:3},{value:"Zero Downtime Deployment",id:"zero-downtime-deployment",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Hey, welcome to my blog!"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"A few months ago, I worked on a project that utilized Docker and Nginx to deploy the product on Digital Ocean\u2019s VPS. Everything at that time was quite primitive, I had to set up everything from scratch. From containerizing the application to creating a CI/CD pipeline to build, manage, and deploy different Docker image versions."}),"\n",(0,r.jsxs)(n.p,{children:["Docker is a great tool and I love using it in my workflow. I define the Docker services in the configuration file, then pull, up and down the containers to make sure they are up to date. But we have a problem: the time between when I down the container and when I up it. It took\xa0",(0,r.jsx)(n.strong,{children:"2 minutes"}),"\xa0of downtime in total. That\u2019s unacceptable for a product deployed for end-users."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Featured Image",src:o(1034).A+"",width:"703",height:"397"})}),"\n",(0,r.jsx)(n.p,{children:"So I implemented a Zero downtime deployment strategy for that project. The BLUE-GREEN strategy is a basic deployment process, but it\u2019s great when simplicity gets the job done."}),"\n",(0,r.jsx)(n.p,{children:"Now, let\u2019s talk about some stuff."}),"\n",(0,r.jsx)(n.h2,{id:"configuration-before-applying",children:"Configuration before applying"}),"\n",(0,r.jsx)(n.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,r.jsx)(n.p,{children:"I have a configuration file like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'showLineNumbers title="./docker-compose.yml"',children:"services:\r\n  api:\r\n    image: pxuanbach/simple-app\r\n    ports:\r\n      - '8000:8000'\r\n    restart: on-failure\n"})}),"\n",(0,r.jsx)(n.h3,{id:"nginx",children:"Nginx"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"nginx.conf"})," configuration will look like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",metastring:'{5} showLineNumbers title="./nginx.conf"',children:'server {\r\n    listen 80 default_server;\r\n    server_name api.app.com;\r\n    location / {\r\n        proxy_pass http://localhost:8000;\r\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n        proxy_set_header Host $host;\r\n        proxy_http_version 1.1;\r\n        proxy_set_header Upgrade $http_upgrade;\r\n        proxy_set_header Connection "upgrade";\r\n        client_max_body_size 64M;\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"deployment-process",children:"Deployment process"}),"\n",(0,r.jsx)(n.p,{children:"It was very easy, and I just followed the steps\u2026"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"{5} showLineNumbers",children:"docker compose pull\r\n\r\ndocker compose down\r\n\r\n# ---DOWNTIME HERE---\r\n\r\ndocker compose up\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Old Deployment Flow",src:o(2822).A+"",width:"696",height:"141"})}),"\n",(0,r.jsx)(n.p,{children:"Now let's move on to the BLUE-GREEN strategy."}),"\n",(0,r.jsx)(n.h2,{id:"new-configuration",children:"New configuration"}),"\n",(0,r.jsx)(n.h3,{id:"docker-compose-1",children:"Docker Compose"}),"\n",(0,r.jsxs)(n.p,{children:["To apply the BLUE-GREEN strategy, I need to update this configuration file a bit. I use the\xa0",(0,r.jsx)(n.strong,{children:"Anchors and aliases"}),"\xa0features to have a blue and green service with the same configuration. I only change the port number for the green service."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'showLineNumbers title="./docker-compose.yml"',children:"services:\r\n  api_blue: &api\r\n    image: pxuanbach/simple-app\r\n    ports:\r\n      - '8000:8000'\r\n    restart: on-failure\r\n\r\n  api_green: \r\n    <<: *api\r\n    ports:\r\n      - \"8001:8000\"\n"})}),"\n",(0,r.jsx)(n.h3,{id:"nginx-1",children:"Nginx"}),"\n",(0,r.jsxs)(n.p,{children:["Create a copy of the nginx configuration corresponding to the service name and port. For example\xa0",(0,r.jsx)(n.code,{children:"api_green.conf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",metastring:'showLineNumbers title="./api_green.conf"',children:"server {\r\n    listen 80 default_server;\r\n    server_name api.app.com;\r\n    location / {\r\n        proxy_pass http://localhost:8001;\r\n        ...\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"zero-downtime-deployment",children:"Zero Downtime Deployment"}),"\n",(0,r.jsx)(n.p,{children:"To achieve the goal, I must use the Bash/Shell script. This script will make use of the Docker command line as well as the Nginx. Its goal is to implement the BLUE-GREEN strategy by identifying which service, BLUE or GREEN, is currently active and then standing up the inactive environment in parallel. To avoid downtime, I will update the Nginx configuration before stopping the old container."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'showLineNumbers title="./pull.run-service.sh"',children:'#!/bin/bash\r\n\r\n# Step 1\r\nBLUE_SERVICE="api_blue"\r\nBLUE_SERVICE_PORT=8000\r\nGREEN_SERVICE="api_green"\r\nGREEN_SERVICE_PORT=8001\r\n\r\nTIMEOUT=60  # Timeout in seconds\r\nSLEEP_INTERVAL=5  # Time to sleep between retries in seconds\r\nMAX_RETRIES=$((TIMEOUT / SLEEP_INTERVAL))\r\n\r\n# Step 2\r\nif docker ps --format "{{.Names}}" | grep -q "$BLUE_SERVICE"; then\r\n  ACTIVE_SERVICE=$BLUE_SERVICE\r\n  INACTIVE_SERVICE=$GREEN_SERVICE\r\nelif docker ps --format "{{.Names}}" | grep -q "$GREEN_SERVICE"; then\r\n  ACTIVE_SERVICE=$GREEN_SERVICE\r\n  INACTIVE_SERVICE=$BLUE_SERVICE\r\nelse\r\n  ACTIVE_SERVICE=""\r\n  INACTIVE_SERVICE=$BLUE_SERVICE\r\nfi\r\n\r\necho "Starting $INACTIVE_SERVICE container"\r\n\r\ndocker compose pull $INACTIVE_SERVICE\r\n\r\ndocker compose up -d $INACTIVE_SERVICE\r\n\r\n# Step 3\r\n# Wait for the new environment to become healthy\r\necho "Waiting for $INACTIVE_SERVICE to become healthy..."\r\nsleep 10\r\n\r\ni=0\r\nwhile [ "$i" -le $MAX_RETRIES ]; do\r\n  HEALTH_CHECK_URL="http://localhost:8000/health"\r\n  if [ "$INACTIVE_SERVICE" = "$BLUE_SERVICE" ]; then\r\n    HEALTH_CHECK_URL="http://localhost:$BLUE_SERVICE_PORT/health"\r\n  else\r\n    HEALTH_CHECK_URL="http://localhost:$GREEN_SERVICE_PORT/health"\r\n  fi\r\n\r\n  response=$(curl -s -o /dev/null -w "%{http_code}" $HEALTH_CHECK_URL)\r\n  # Check the HTTP status code\r\n  if [ $response -eq 200 ]; then\r\n      echo "$INACTIVE_SERVICE is healthy"\r\n      break\r\n  else\r\n      echo "Health check failed. API returned HTTP status code: $response"\r\n  fi\r\n  i=$(( i + 1 ))\r\n  sleep "$SLEEP_INTERVAL"\r\ndone\r\n\r\n# Step 4\r\n# update Nginx config\r\necho "Update Nginx config to $INACTIVE_SERVICE"\r\ncp ./$INACTIVE_SERVICE.conf /your/config/path/api.conf\r\n# restart nginx\r\nnginx -s reload;\r\n\r\nsleep 5\r\n\r\n# Step 5\r\n# remove OLD CONTAINER\r\necho "Remove OLD CONTAINER: $ACTIVE_SERVICE"\r\ndocker compose rm -fsv $ACTIVE_SERVICE\r\n\r\n# remove unused images\r\n(docker images -q --filter \'dangling=true\' -q | xargs docker rmi) || true\n'})}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s walk through the script step by step:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"I define the name and port of the blue and green services. And the maximum retry time to check the status of the container. The value depends on your container initialization time.\r\nSau \u0111\xf3 ti\u1ebfn h\xe0nh pull phi\xean b\u1ea3n m\u1edbi c\u1ee7a Docker image v\u1ec1."}),"\n",(0,r.jsx)(n.li,{children:"Execute the docker command to find the inactive service and start it."}),"\n",(0,r.jsx)(n.li,{children:"Check the status of the newly initialized container."}),"\n",(0,r.jsxs)(n.li,{children:["Update Nginx configuration and reload it. Using\xa0",(0,r.jsx)(n.code,{children:"nginx -s reload"}),"\xa0to reload Nginx\xa0",(0,r.jsx)(n.strong,{children:"usually does not cause downtime"}),". This is because the command only tells Nginx to reload its configuration, it does not restart the entire process."]}),"\n",(0,r.jsx)(n.li,{children:"Clean up some unused stuff (old docker image, old container)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In some cases the command\xa0",(0,r.jsx)(n.code,{children:"docker compose rm -fsv"}),"\xa0may not work. Easily change it to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker compose stop $ACTIVE_SERVICE\r\ndocker compose rm -f $ACTIVE_SERVICE\n"})}),"\n",(0,r.jsx)(n.p,{children:"To deploy the new version, simply run the created script."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"./pull.run-service.sh\n"})}),"\n",(0,r.jsx)(n.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"As you can see, we can automate the deployment process with just 1 Bash script. The primary objective is to redirect the proxy to the newest container and then remove the old one."}),"\n",(0,r.jsxs)(n.p,{children:["If you need a project to run a demo on your environment, here are my ",(0,r.jsx)(n.a,{href:"https://github.com/pxuanbach/demo-blue-green-deployment",children:"Git repository"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.maxcountryman.com/articles/zero-downtime-deployments-with-docker-compose",children:"Zero-Downtime Deployments with Docker Compose \u2013 Max Countryman"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.docker.com/reference/cli/docker/compose/rm/",children:"docker compose rm | Docker Docs"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1034:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/blue-green-deployment-with-nginx-282b1b50b039dd50add056db6bf70e5a.png"},2822:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/old-deployment-flow-6e13ae744f8af1e014dee53c9e1c141d.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var r=o(6540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);