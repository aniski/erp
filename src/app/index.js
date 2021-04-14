const koa = require("koa");

const useRoutes = require("../routers");
const app = new koa();

// 加载路由
app.useRoutes = useRoutes;
app.useRoutes();

module.exports = app;
