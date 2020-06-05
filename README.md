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

`引入graphql`  
访问 http://localhost:9000/graphql

```graphql
query {
  author(id: 1) {
    firstName
    lastName
  }
  salary(city: "beijing")
}

query {
  salary(city: "shanghai")
  getPost(id: 2) {
    id
    title
    date {
      month
    }
  }
}
```

`建立项目前端 vueCms`

```js
cd package/vueCms
npm i
npm run dev
```

`支持vueCms访问graphql接口`

```js
npm i -S vue-apollo graphql apollo-boost

完成 vueCms 调用 graphql 与 restapi
```
