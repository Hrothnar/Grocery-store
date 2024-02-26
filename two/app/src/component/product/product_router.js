import express from "express";
import * as productController from "./product_controller.js";

export function registerProductRouters(app) {
    const router = express.Router();

    router.post("/create", productController.createProduct);
    router.get("/", productController.getAllProducts);
    router.get("/:id", productController.getAllProducts);

    app.use("/product", router);
}