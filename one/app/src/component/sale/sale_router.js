import express from "express";
import * as saleController from "./sale_controller.js";

export function registerSaleRouters(app) {
    const router = express.Router();

    router.post("/create", saleController.createSale);
    router.get("/", saleController.getAllSales);
    router.get("/:id", saleController.getSaleById);

    app.use("/sale", router);
}