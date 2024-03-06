import express from "express";
import * as productController from "./product_controller.js";

export function registerProductRouters(app) {
    const router = express.Router();

    /**
     * Somehow, moving get product/d router down after get product turns off routing for the first router
     */

    router.get("/create", productController.getProductCreateForm); // should return an HTML choosing page, where a User could choose which particular product they wants to create

    router.get("/delete", productController.removeAllProducts); // temporarily
    router.delete("/", productController.removeAllProducts);
    router.get("/", productController.getAllProducts);
    router.get("/:id", productController.getProductById);

    app.use("/product", router);
}