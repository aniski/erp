const router = require("koa-router");

const test = require("../services/test");

const route = new router();

route.get("/test", async (ctx, next) => {
  const res = await test();
  ctx.body = res;
});

module.exports = route;
