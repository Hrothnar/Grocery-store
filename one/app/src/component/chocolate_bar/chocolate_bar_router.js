import * as chocolateBarController from "./chocolate_bar_controller.js";
import { express } from "../../general/db_connection.js";

export function chocolateBarRouter(app) {
  const router = express.Router();

  router.get("/create", chocolateBarController.getChocolateBarCreateForm);
  router.post("/create", chocolateBarController.createChocolateBar);
  router.get("/:id/edit", chocolateBarController.getChocolateBarEditForm);
  router.put("/:id/edit", chocolateBarController.updateChocolateBar);
  router.delete("/", chocolateBarController.removeAllChocolateBar);
  router.delete("/:id/", chocolateBarController.removeChocolateBarById);
  router.get("/", chocolateBarController.getAllChocolateBars);
  router.get("/:id", chocolateBarController.getChocolateBarById);

  app.use("/chocolate_bar", router);
};