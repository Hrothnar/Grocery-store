import express from "express";

import * as mainController from "./main_controller.js";
import { fillDatabase } from "../../../util/database_filler.js";

export function registerMainRouters(app) {
    const router = express.Router();

    router.get("/", mainController.hello);
    router.get("/fill", fillDatabase) // populate databases with data

    app.use("/", router);
}