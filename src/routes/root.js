import express from "express";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.send("Hello API!!");
});

export default rootRouter;
