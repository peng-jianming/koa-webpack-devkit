import path from "path";

const MONGO_USERNAME = process.env.DB_USER || "pjm";
const MONGO_PASSWORD = process.env.DB_PASS || "XYZ!123";
const MONGO_HOSTNAME = process.env.DB_HOST || "www.pengjianming.top";
const MONGO_PORT = process.env.DB_PORT || "27017";
const DB_NAME = process.env.DB_NAME || "weixinGZH";

const DB_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${DB_NAME}`;

const JWT_SECRET =
  "&Vi%33pG2mD51xMo%OUOTo$ZWOa3TYt328tcjXtW9&hn%AOb9quwaZaRMf#f&44c";

const uploadPath =
  process.env.NODE_ENV === "production"
    ? "/app/public"
    : path.join(path.resolve(__dirname), "../../public");

const isDevMode = process.env.NODE_ENV !== "production";

const port = 3000;

export default {
  DB_NAME,
  DB_URL,
  MONGO_HOSTNAME,
  JWT_SECRET,
  uploadPath,
  isDevMode,
  port,
};
