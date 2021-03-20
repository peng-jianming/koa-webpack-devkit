import { uploadPath } from "src/config";

class ContentController {
  upload(ctx) {
    const file = ctx.request.files.file;
    const basename = path.basename(file.path);
    ctx.body = {
      code: 0,
      data: {
        url: `${uploadPath}/${basename}`,
      },
    };
  }
}

export default new ContentController();
