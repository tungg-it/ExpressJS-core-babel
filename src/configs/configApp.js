import { config } from "dotenv";

config();

const configApp = {
  environment: process.env?.ENV ?? "development",
  port: process.env?.PORT ?? 8080,
  prefix: process.env?.PREFIX ?? "api",
};

module.exports = configApp;
