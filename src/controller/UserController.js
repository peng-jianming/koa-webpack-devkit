class UserController {
  getUserInfo(ctx) {
    ctx.body = "获取用户信息";
  }
}

export default new UserController();
