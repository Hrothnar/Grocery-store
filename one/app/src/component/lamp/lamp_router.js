import * as lampController from "./lamp_controller.js";
import { express } from "../../general/db_connection.js";

export function lampRouter(app) {
  const router = express.Router();

  router.get("/create", lampController.getLampCreateForm);
  router.post("/create", lampController.createLamp);
  router.get("/:id/edit", lampController.getLampEditForm);
  router.put("/:id/edit", lampController.updateLamp);
  router.delete("/", lampController.removeAllLamp);
  router.delete("/:id/", lampController.removeLampById);
  router.get("/", lampController.getAllLamps);
  router.get("/:id", lampController.getLampById);

  app.use("/lamp", router);
};