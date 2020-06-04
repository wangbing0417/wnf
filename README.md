`进入项目根目录,执行`  
lerna bootstrap

`启动 gateway`  
cd packages/gateway && yarn run codegen && yarn run start:dev

`启动 contentService`  
cd packages/contentService && yarn run codegen && yarn run start:dev

`启动 userService`  
cd packages/userService && yarn run codegen && yarn run start:dev

`浏览器访问`  
http://localhost:9000/healthcheck  
http://localhost:9000/add  
http://localhost:9000/post/3
