module.exports = app => {
    const toyCar = require("../controller/toy_car_controller.js");
    const router = require("express").Router();
    
    router.post("/", toyCar.create);
    // router.get("/", toyCar.findAll);
    // router.get("/:id", toyCar.findByPk);
    router.get("/:toy_car_id/ :tag_id", toyCar.addTag);
    // router.put("/:id", toyCars.update);
    // router.delete("/:id", toyCars.delete);
    // router.delete("/", toyCars.deleteAll);
    
    app.use("/toy_car", router);
}
