import express from "express";

import { configureCors } from "./app/src/configuration/cors_config.js";
import { setupModelRelations } from "./app/src/configuration/db_relations_config.js";
import { registerAppRouters } from "./app/src/process/registrar/router_registrar.js";
import { sequelize } from "./app/src/configuration/db_config.js";
import { status404, status500 } from "./app/src/error/error_handler.js";
import { log } from "./app/src/utility/logger/http_logger.js";
import { fillDatabase } from "./app/src/utility/database_filler.js";

const app = express();

const port = process.env.APP_PORT_ONE || "1111";

app.use(configureCors());
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(log); // custom middleware for logging HTTP requests

setupModelRelations();
registerAppRouters(app);
// fillDatabase(); // for development

app.use([status500, status404]);

app.listen(port, () => {
    console.log("\n=================================================================");
    console.log(`The express.js server has started and is listening on port: ${port}`);
});

sequelize.sync({ force: true })
    .then(() => {
        console.log("\nSequelize schemas were created");
        console.log("============================================================================");
    })
    .catch((error) => {
        console.log(`Failed to sync db: ${error.message}`);
    });