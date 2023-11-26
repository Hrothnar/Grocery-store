module.exports = app => {
    const toyCars = require("../controller/toy_car_controller.js");
    const router = require("express").Router();
    
    router.post("/", toyCars.create);
    router.get("/", toyCars.findAll);
    router.get("/:id", toyCars.findByPk);
    router.get("/:toy_car_id, :tag_id", toyCars.addTag)
    // router.put("/:id", toyCars.update);
    // router.delete("/:id", toyCars.delete);
    // router.delete("/", toyCars.deleteAll);
    
    app.use("/toy_cars", router);
}
