import express from "express";
import * as mainController from "./main_controller.js";

export function mainRouter(app) {
  const router = express.Router();

  router.get("/", mainController.hello);

  app.use("/", router);
};