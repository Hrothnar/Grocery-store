import express from "express";
import * as customerController from "./customer_controller.js";

export function registerCustomerRouters(app) {
    const router = express.Router();

    router.get("/", customerController.getAllCustomers);
    router.get("/:id", customerController.getCustomerById);

    app.use("/customer", router);
}