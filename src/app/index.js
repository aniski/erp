const Koa = require("koa");
const bodyParser = require('koa-bodyparser');

const useRoutes = require("../routers");
const handleError = require('./error-handle');
const { varifyAuth } = require('../middlewares/authorization.middleware');

const app = new Koa();

// 解析http请求中body数据
app.use(bodyParser());

// token验证
app.use(varifyAuth);

// 加载路由
app.useRoutes = useRoutes;
app.useRoutes();

// 监听错误
app.on('error', handleError);

module.exports = app;
