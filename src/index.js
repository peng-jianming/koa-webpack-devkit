import Koa from "koa";
import JWT from "koa-jwt";
import path from "path";
import helmet from "koa-helmet";
import statics from "koa-static";
import router from "src/routes/routes";
import config from "src/config";
import koaBody from "koa-body";
import cors from "@koa/cors";
import compose from "koa-compose";
import compress from "koa-compress";

const app = new Koa();

// 定义公共路径，不需要jwt鉴权
const jwt = JWT({ secret: config.JWT_SECRET }).unless({
  path: [/^\/public/, /^\/login/],
});

/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
      maxFieldsSize: 5 * 1024 * 1024,
    },
    onError: (err) => {
      console.log("koabody TCL: err", err);
    },
  }),
  statics(path.join(__dirname, "../public")),
  cors(),
  helmet(),
  jwt,
]);

if (!config.isDevMode) {
  app.use(compress());
}
app.use(middleware);
app.use(router());

app.listen(config.port, () => {
  console.log("app is runing at " + config.port);
});
