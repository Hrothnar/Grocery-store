import express from "express";
import * as toyCarController from "./toy_car_controller.js";

export function toyCarRouter(app) {
  const router = express.Router();

  router.get("/create", toyCarController.getToyCarCreateForm);
  router.post("/create", toyCarController.createToyCar);
  router.get("/:id/edit", toyCarController.getToyCarEditForm);
  router.put("/:id/edit", toyCarController.updateToyCar);
  router.delete("/", toyCarController.removeAllToyCar);
  router.delete("/:id/", toyCarController.removeToyCarById);
  router.get("/", toyCarController.getAllToyCars);
  router.get("/:id", toyCarController.getToyCarById);

  app.use("/toy_car", router);
};