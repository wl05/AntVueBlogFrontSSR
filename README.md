# AntVueBlogFrontSSR

根据[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)重写[AntVueBlogFront](https://github.com/antbaobao/AntVueBlogFront),实现SSR服务端渲染，优化SEO。
[博客地址](http://120.77.219.106:8080/)

## Build Setup

**Requires Node.js 7+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## Deploy

```bash
pm2 start npm --name "ant-blog" -- start
```
