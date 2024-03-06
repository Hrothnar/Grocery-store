import express from "express";
import * as customerController from "./customer_controller.js";

export function registerCustomerRouters(app) {
    const router = express.Router();

    router.post("/create", customerController.createCustomer);
    router.get("/", customerController.getAllCustomers);
    router.get("/:id", customerController.getCustomerById);
    router.delete("/", customerController.removeAllCustomers);

    app.use("/customer", router);
}