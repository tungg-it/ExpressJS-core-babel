import express from "express";
import cors from "cors";

import rootRouter from "@routes/root";
import Logger from "@helpers/logger";
import config from "@configs/configApp";
import morganMiddleware from "@middlewares/morgan.middleware";

const app = express();
const port = config.port;
const prefix = config.prefix;
const logger = Logger();

// Plugins
app.use(morganMiddleware);
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Router config
app.use(`/${prefix}`, rootRouter);

app.listen(port, () => {
  logger.info(`Application listening at http://localhost:${port}/${prefix}`);
});
