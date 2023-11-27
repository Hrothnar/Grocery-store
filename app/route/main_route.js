module.exports = app => {
    const main = require("../controller/main_controller.js");
    const router = require("express").Router();
    
    router.get("/", main.hello);
    
    app.use("/", router);
}
