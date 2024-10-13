import dotenv from "dotenv";
dotenv.config();

export const DATABASE_URI =
  process.env.DATABASE_URI || "mongodb://localhost:27017/webtoon_showcase";
