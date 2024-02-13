import express from "express";
import * as tagController from "./tag_controller.js";

export function tagRouter(app) {
  const router = express.Router();

  router.get("/create", tagController.getTagCreateForm);
  router.post("/create", tagController.createTag);
  router.get("/:id/edit", tagController.getTagEditForm);
  router.put("/:id/edit", tagController.updateTag);
  router.delete("/", tagController.removeAllTag);
  router.delete("/:id/", tagController.removeTagById);
  router.get("/", tagController.getAllTags);
  router.get("/:id", tagController.getTagById);

  app.use("/tag", router);
};