import express from "express";
import * as chocolateBarController from "./chocolate_bar_controller.js";

export function registerChocolateBarRouters(app) {
  const router = express.Router();

  router.get("/create", chocolateBarController.getChocolateBarCreateForm);
  router.post("/create", chocolateBarController.createChocolateBar);
  router.get("/:id/edit", chocolateBarController.getChocolateBarEditFormById);
  router.put("/:id/edit", chocolateBarController.updateChocolateBarById);
  router.delete("/", chocolateBarController.removeAllChocolateBars);
  router.delete("/:id/", chocolateBarController.removeChocolateBarById);
  router.get("/", chocolateBarController.getAllChocolateBars);
  router.get("/:id", chocolateBarController.getChocolateBarById);

  app.use("/chocolate_bar", router);
}