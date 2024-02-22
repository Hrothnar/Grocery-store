import express from "express";
import * as productController from "./product_controller.js";

export function registerProductRouters(app) {
    const router = express.Router();

    router.get("/create", productController.getProductCreateForm); // should return an HTML choosing page, where a User could choose which particular product they wants to create
    router.get("/", productController.getAllProducts);
    router.get("/:id", productController.getProductById);

    app.use("/product", router);
}