"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[295],{8906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(4848),r=n(8453);const i={slug:"asynchronous-request-batching-design-pattern-in-nodejs",title:"Asynchronous Request Batching Design Pattern in Node.js",authors:["pxuanbach"],tags:["nodejs","batching"],date:"2024-07-18T10:00",image:"/img/07_asynchronous_request_batching/featured.png"},a=void 0,o={permalink:"/blog/asynchronous-request-batching-design-pattern-in-nodejs",source:"@site/blog/07_asynchronous_request_batching/index.md",title:"Asynchronous Request Batching Design Pattern in Node.js",description:"Hello, This is the first post when I migrated from Wordpress to Docusaurus.",date:"2024-07-18T10:00:00.000Z",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"batching",permalink:"/blog/tags/batching"}],readingTime:6.98,hasTruncateMarker:!0,authors:[{name:"Bach Pham",title:"Software Engineer",url:"https://github.com/pxuanbach",imageURL:"https://avatars.githubusercontent.com/u/55500268?v=4",key:"pxuanbach"}],frontMatter:{slug:"asynchronous-request-batching-design-pattern-in-nodejs",title:"Asynchronous Request Batching Design Pattern in Node.js",authors:["pxuanbach"],tags:["nodejs","batching"],date:"2024-07-18T10:00",image:"/img/07_asynchronous_request_batching/featured.png"},unlisted:!1,prevItem:{title:"Essential modules for developing applications with FastAPI (P4 - Job Scheduler)",permalink:"/blog/essential-modules-for-developing-applications-with-fastapi-p4-job-scheduler"},nextItem:{title:"Destructuring in Python",permalink:"/blog/destructuring-in-python"}},c={authorsImageUrls:[void 0]},l=[{value:"Define the Problem",id:"define-the-problem",level:2},{value:"Introduction to Asynchronous Request Batching",id:"introduction-to-asynchronous-request-batching",level:2},{value:"Normal API server",id:"normal-api-server",level:2},{value:"Test scenario",id:"test-scenario",level:2},{value:"Async request batching server",id:"async-request-batching-server",level:2},{value:"Notes",id:"notes",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Hello, This is the first post when I migrated from Wordpress to Docusaurus."}),"\n",(0,s.jsx)(t.p,{children:"Recently, I have been researching some design patterns in Node.js to apply to my team's project. Are you a fan of Node.js?"}),"\n",(0,s.jsxs)(t.p,{children:["I have discovered some interesting patterns that can be applied to my project. Today, I will introduce the ",(0,s.jsx)(t.strong,{children:"Asynchronous Request Batching Design Pattern"}),". I'm really excited to share it with you."]}),"\n",(0,s.jsx)(t.h2,{id:"define-the-problem",children:"Define the Problem"}),"\n",(0,s.jsx)(t.p,{children:"In reality, a large number of systems are expected to face issues with high throughput and large workloads. And the projects I have been assigned to are no exception \ud83d\ude01. So\u2026 what is the solution? At that time, I imagined a lot of solutions like caching, scaling, partitioning,\u2026"}),"\n",(0,s.jsx)(t.p,{children:"Caching seems quite efficient. However, it comes with the challenge of invalidating cached data. Is there a similar approach to caching that doesn't involve worrying about data invalidation? Is there any simpler way?"}),"\n",(0,s.jsx)(t.p,{children:"The Asynchronous Request Batching Design Pattern appears. This design pattern is really appealing to me at the moment."}),"\n",(0,s.jsx)(t.h2,{id:"introduction-to-asynchronous-request-batching",children:"Introduction to Asynchronous Request Batching"}),"\n",(0,s.jsx)(t.p,{children:"Let's say I export an API and the Client makes multiple requests to that API at the same time. The server receives those requests and processes them concurrently. Please look at the image below."}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Normal Async Request",src:n(8219).A+"",width:"541",height:"291"})})}),"\n",(0,s.jsx)(t.p,{children:"In the example above, both Client 1 and Client 2 make requests to the server. Each request is considered an async operation. As the number of requests increases, the number of asynchronous operations that need to be executed also grows."}),"\n",(0,s.jsx)(t.p,{children:"Now, let's talk about batching."}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Async Request Batching",src:n(4064).A+"",width:"421",height:"301"})})}),"\n",(0,s.jsx)(t.p,{children:"Still using the example with Client 1 and Client 2, but this time, their requests are batched together and processed in just one async operation. By doing this, when the operation completes, both clients are notified, even though the\xa0async operation is actually executed only once."}),"\n",(0,s.jsx)(t.p,{children:"This approach offers a remarkably simple yet powerful way to optimize the load of an application. It avoids the complexity of caching mechanisms, which often require robust memory management and invalidation strategies."}),"\n",(0,s.jsx)(t.h2,{id:"normal-api-server",children:"Normal API server"}),"\n",(0,s.jsx)(t.p,{children:"Let's consider an API server that manages the sales of an e-commerce company. Its task is to retrieve quantity information for hundreds of thousands of products from the database."}),"\n",(0,s.jsx)(t.p,{children:"The schema used for this example is a simple table with three fields."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",metastring:"showLineNumbers",children:"CREATE TABLE sales (\r\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n  product varchar(255), \r\n  quantity bigint\r\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The data processing operation is straightforward. It involves retrieving all records with the corresponding product and calculating their total quantity. The algorithm is intentionally slow as we want to highlight the effect of batching and caching later on. The routine would look as follows (file\xa0",(0,s.jsx)(t.code,{children:"totalQuantity.js"}),"):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'showLineNumbers title="./totalQuantity.js"',children:"import db from './database.js';\r\n\r\nexport async function totalQuantity(product) {\r\n  const now = Date.now();\r\n  let sql = `SELECT product, quantity FROM sales WHERE product=?`;\r\n  let total = 0;\r\n  return new Promise(function (resolve, reject) {\r\n    db.all(sql, [product], (err, rows) => {\r\n      if (err) return reject();\r\n      rows.forEach((row) => {\r\n        total += row.quantity;\r\n      })\r\n      console.log(`totalQuantity() took: ${Date.now() - now}ms`);\r\n      resolve(total);\r\n    })\r\n  })\r\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, I will expose the ",(0,s.jsx)(t.code,{children:"totalQuantity"})," API through a simple ",(0,s.jsx)(t.a,{href:"https://expressjs.com/",children:"Express.js"})," server (the ",(0,s.jsx)(t.code,{children:"server.js"})," file):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'showLineNumbers title="./server.js"',children:"import express from 'express';\r\nimport { totalQuantity } from './totalQuantity.js';\r\n\r\nconst app = express();\r\nconst PORT = 8000;\r\n\r\napp.get('/', (req, res) => {\r\n  res.send('Hello World!');\r\n})\r\n\r\napp.get('/total-quantity', async (req, res) => {\r\n  const { product } = req.query;\r\n  const total = await totalQuantity(product);\r\n  res.status(200).json({\r\n    product,\r\n    total\r\n  })\r\n})\r\n\r\napp.listen(PORT, () => {\r\n  console.log(`Example app listening on PORT ${PORT}`)\r\n})\n"})}),"\n",(0,s.jsx)(t.p,{children:"Before starting the server, we will generate some sample data. Leveraging SQLite's lightweight and efficient nature, I've chosen it as the database for this example. Furthermore, I have prepared a script to populate the sales table with 200,000 rows (the Github repository can be found in the conclusion section)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run populate\n"})}),"\n",(0,s.jsx)(t.p,{children:"After seeding data:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"After Seeding Data",src:n(2312).A+"",width:"698",height:"257"})}),"\n",(0,s.jsx)(t.p,{children:"Let's start the server now."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,s.jsx)(t.h2,{id:"test-scenario",children:"Test scenario"}),"\n",(0,s.jsxs)(t.p,{children:["To clearly illustrate the difference between a server without batching and one with a batching pattern, we will create a scenario with more than one request. So, we will use a script named ",(0,s.jsx)(t.code,{children:"loadTest.js"}),", which sends 20 requests at intervals of 20ms. The request sending interval should be lower than the ",(0,s.jsx)(t.code,{children:"totalQuantity"})," function's processing duration."]}),"\n",(0,s.jsx)(t.p,{children:"To run the test, just execute the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"node loadTest.js\n"})}),"\n",(0,s.jsx)(t.p,{children:"Note the total time taken for the test."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Test Normal API Server",src:n(2240).A+"",width:"697",height:"466"})}),"\n",(0,s.jsxs)(t.p,{children:["The results of 3 test runs are 994ms, 954ms, 957ms ~ avg ",(0,s.jsx)(t.strong,{children:"968ms"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Let's move on to the exciting part of today's discussion: optimizing asynchronous request processing using the batching pattern."}),"\n",(0,s.jsx)(t.h2,{id:"async-request-batching-server",children:"Async request batching server"}),"\n",(0,s.jsxs)(t.p,{children:["Now, we need to introduce an additional processing layer on top of the ",(0,s.jsx)(t.code,{children:"totalQuantity"})," function. This is where we implement the mechanism of the batching pattern."]}),"\n",(0,s.jsx)(t.p,{children:"Now, imagine working with caching without worrying about cache invalidation. That makes it much easier to understand."}),"\n",(0,s.jsx)(t.p,{children:"We will use a memory space to store the promises that need to be processed (it could be an array, map, dict, etc.). And we will differentiate them based on the input of the request. New requests with the same input will reference the promises stored in the memory space. When the promises complete, they will return results to all the requests referencing them, and then we will remove them from the memory space."}),"\n",(0,s.jsx)(t.p,{children:"Now it's time to code."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'showLineNumbers {3,6-8,11-14,16} title="./totalQuantityBatch.js"',children:'import { totalQuantity as totalQuantityRaw } from "./totalQuantity.js";\r\n\r\nconst requestsQueue = new Map();\r\n\r\nexport function totalQuantity(product) {\r\n  if (requestsQueue.has(product)) {\r\n    console.log("Batching...")\r\n    return requestsQueue.get(product);\r\n  }\r\n\r\n  const promise = totalQuantityRaw(product);\r\n  requestsQueue.set(product, promise);\r\n  promise.finally(() => {\r\n    requestsQueue.delete(product)\r\n  })\r\n  return promise;\r\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"totalQuantity"})," function of ",(0,s.jsx)(t.code,{children:"totalQuantityBatch"})," module can be considered a proxy for ",(0,s.jsx)(t.code,{children:"totalQuantityRaw"})," function of ",(0,s.jsx)(t.code,{children:"totalQuantity"})," module, let's see how it works:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In ",(0,s.jsx)(t.strong,{children:"line 3"}),", I define the variable ",(0,s.jsx)(t.code,{children:"requestsQueue"})," as a Map to serve as temporary memory."]}),"\n",(0,s.jsxs)(t.li,{children:["From ",(0,s.jsx)(t.strong,{children:"line 6-8"}),", we check if a request with the input \u201cproduct\u201d already exists in the temporary memory. If it does, we return the stored promises."]}),"\n",(0,s.jsxs)(t.li,{children:["From ",(0,s.jsx)(t.strong,{children:"line 11-14"}),", If the input \u201cproduct\u201d does not exist, we start executing the ",(0,s.jsx)(t.code,{children:"totalQuantityRaw"})," function and store it in the temporary memory. One nice thing is that we can leverage ",(0,s.jsx)(t.code,{children:".finally"})," to attach a callback that removes the promise from the temporary memory."]}),"\n",(0,s.jsxs)(t.li,{children:["In ",(0,s.jsx)(t.strong,{children:"line 16"}),", return running promise."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After completing the logic in the ",(0,s.jsx)(t.code,{children:"totalQuantityBatch"})," module, we need to update the ",(0,s.jsx)(t.code,{children:"server.js"})," to incorporate the new logic."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'showLineNumbers title="./server.js"',children:"import express from 'express';\r\n// import { totalQuantity } from './totalQuantity.js';\r\nimport { totalQuantity } from './totalQuantityBatch.js';\r\n...\n"})}),"\n",(0,s.jsx)(t.p,{children:"Restart the server and let's see how the results change."}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Restart Server",src:n(6770).A+"",width:"501",height:"631"})})}),"\n",(0,s.jsxs)(t.p,{children:["Let\u2019s run the ",(0,s.jsx)(t.code,{children:"loadTest.js"})," script:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Test Async Request Batching",src:n(6237).A+"",width:"688",height:"463"})}),"\n",(0,s.jsxs)(t.p,{children:["The results of 3 test runs are 624ms, 648ms, 592ms ~ avg ",(0,s.jsx)(t.strong,{children:"621ms"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["We can clearly see that the processing time for all requests has been significantly reduced. To observe even greater efficiency, you can increase the number of records in the database to extend the processing time of the ",(0,s.jsx)(t.code,{children:"totalQuantity"})," function."]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.p,{children:"When implementing in a real-world project, we will use more advanced techniques to ensure the application operates reliably and smoothly."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["We will need a more optimized temporary memory space. A large number of requests to the server with different inputs later could cause the memory to expand significantly. You might consider using ",(0,s.jsx)(t.strong,{children:"LRU (Least Recently Used)"})," or ",(0,s.jsx)(t.strong,{children:"FIFO (First In, First Out)"})," methods for data management."]}),"\n",(0,s.jsx)(t.li,{children:"You can also apply caching to enhance the effectiveness of this technique and standardize the stored data for easier sharing. Of course, you will need to address the issue of cache invalidation."}),"\n",(0,s.jsxs)(t.li,{children:["When the application is distributed across multiple processes and instances, storing data in memory in different locations can lead to inconsistent results and become redundant. The solution is to use a shared storage. Common caching solutions include ",(0,s.jsx)(t.strong,{children:"Redis"})," (",(0,s.jsx)(t.a,{href:"https://redis.io/",children:"Redis - The Real-time Data Platform"}),") and ",(0,s.jsx)(t.strong,{children:"Memcached"})," (",(0,s.jsx)(t.a,{href:"https://memcached.org/",children:"memcached - a distributed memory object caching system"}),")."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["I hope this post was useful. If you need a project to run a demo on your environment, here is my\xa0",(0,s.jsx)(t.a,{href:"https://github.com/pxuanbach/nodejs-design-pattern",children:"Git repository"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"See you again!"}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://blog.gogroup.co/asynchronous-request-batching-caching-in-node-js-b724c8a92562",children:"Asynchronous Request Batching & Caching in Node.js | by Maharshi Shah | GoGroup Tech Blog"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.nodejsdesignpatterns.com/",children:"Node.js Design Patterns Third Edition by Mario Casciaro and Luciano Mammino (nodejsdesignpatterns.com)"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2312:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/after-seeding-data-63b73ddc739568126e114f1a6c36694f.png"},4064:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/async-request-batching-98383fcadb78102b51d34bf1dfb76a92.png"},8219:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/normal-async-request-fde198fd5d30185c2c43b3cd4f4db3a6.png"},6770:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/restart-server-b24e101342a2910b8a93a580cfd7a6a5.png"},6237:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/test-async-request-batching-43726a2ba63910e1b231a035d738df6b.png"},2240:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/test-normal-api-server-df24c9a3be02b90d9a64fb304b28fc3a.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);