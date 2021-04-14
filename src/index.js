const app = require("./app");

const { APP_HOST, APP_PORT } = require("./app/config");

// 监听配置的端口
app.listen(APP_PORT, APP_HOST, () => {
  console.log(`app listen on ${APP_HOST}:${APP_PORT}`);
});
