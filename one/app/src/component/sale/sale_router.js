import express from "express";
import * as saleController from "./sale_controller.js";

export function registerSaleRouters(app) {
    const router = express.Router();

    router.get("/delete", saleController.removeAllSales);
    // router.delete("/", saleController.removeAllSales);

    router.get("/buy/:customerId/:productId", saleController.createSale);
    router.get("/", saleController.getAllSales);
    router.get("/:id", saleController.getSaleById);

    app.use("/sale", router);
}