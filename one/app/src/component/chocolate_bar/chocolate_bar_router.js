import express from "express";
import * as chocolateBarController from "./chocolate_bar_controller.js";

// Part of alternative approach of handling request
// import * as chocolateBarValidator from "./chocolate_bar_validator.js";
// import * as chocolateBarService from "./chocolate_bar_service.js";
// import * as responseSender from "../../sender/response_sender.js";

export function registerChocolateBarRouters(app) {
    const router = express.Router();

    router.get("/create", chocolateBarController.getChocolateBarCreateForm);
    router.post("/create", chocolateBarController.createChocolateBar);

    // Part of alternative approach of handling request
    // router.post("/create",
    //     chocolateBarController.createChocolateBar,
    //     chocolateBarValidator.validateChocolateBar,
    //     chocolateBarService.createChocolateBar,
    //     responseSender.sendCreatedResponse);

    router.get("/:id/edit", chocolateBarController.getChocolateBarEditFormById);
    router.put("/:id/edit", chocolateBarController.updateChocolateBarById);
    router.delete("/", chocolateBarController.removeAllChocolateBars);
    router.delete("/:id/", chocolateBarController.removeChocolateBarById);
    router.get("/", chocolateBarController.getAllChocolateBars);
    router.get("/:id", chocolateBarController.getChocolateBarById);
    router.get("/:chocolateBarId/:tagId", chocolateBarController.attachTagToChocolateBarById);

    app.use("/chocolate_bar", router);
}