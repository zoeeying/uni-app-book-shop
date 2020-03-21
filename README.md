# uni-app-book-shop

使用 uni-app 写的一个网上书店项目。

首先把接口服务启起来，接口是用 Koa2 写的，没有使用数据库，写死的数据。

```shell
cd server
npm install 
node app.js
```

然后使用 HBuilderX 打开项目，并运行在浏览器、小程序等。

调用豆瓣的 API:

https://douban.uieee.com/v2/book/search?tag=%E5%B0%8F%E8%AF%B4&count=20
