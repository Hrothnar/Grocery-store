module.exports = app => {
    const lamp = require("../controller/lamp_controller.js");
    const router = require("express").Router();
    
    router.post("/", lamp.create);
    router.get("/", lamp.findAll);
    router.get("/:id", lamp.findByPk);
    router.get("/:lamp_id/ :tag_id", lamp.addTag);
    // router.put("/:id", lamp.update);
    // router.delete("/:id", lamp.delete);
    // router.delete("/", lamp.deleteAll);
    
    app.use("/lamp", router);
}
