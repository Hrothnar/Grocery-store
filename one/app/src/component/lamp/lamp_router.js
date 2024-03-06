import express from "express";
import * as lampController from "./lamp_controller.js";

export function registerLampRouters(app) {
  const router = express.Router();

  router.get("/create", lampController.getLampCreateForm);
  router.post("/create", lampController.createLamp);
  router.get("/:id/edit", lampController.getLampEditForm);
  router.put("/:id/edit", lampController.updateLampById);
  router.delete("/", lampController.removeAllLamps);
  router.delete("/:id/", lampController.removeLampById);
  router.get("/", lampController.getAllLamps);
  router.get("/:id", lampController.getLampById);

  app.use("/lamp", router);
}