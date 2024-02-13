import * as mainController from "./main_controller.js";
import { express } from "../../general/db_connection.js";

export function mainRouter(app) {
  const router = express.Router();

  router.get("/", mainController.hello);

  app.use("/", router);
};