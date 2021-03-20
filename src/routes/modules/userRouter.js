import Router from "koa-router";
import userController from "src/controller/UserController";

const router = new Router({ prefix: "/user" });

router.get("/", userController.getUserInfo);

export default router;
