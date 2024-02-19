import express from "express";

import { configureCors } from "./app/src/configuration/cors_config.js";
import { setupModelRelations } from "./app/src/general/db_relations.js";
import { registerAppRouters } from "./app/src/general/router_register.js";
import { sequelize } from "./app/src/general/db_connection.js";
import { fillDatabase } from "./app/src/general/database_filler.js";

const app = express();

const port = process.env.APP_PORT_ONE;

app.use(configureCors());
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

setupModelRelations();
registerAppRouters(app);
fillDatabase();

app.listen(port, () => {
  console.log("\n=================================================================");
  console.log(`The express.js server has started and is listening on port: ${port}`);
});

sequelize.sync({ force: true, alter: true })
  .then(() => {
    console.log("\nSequelize schemas were created");
    console.log("============================================================================");
  })
  .catch((error) => {
    console.log(`Failed to sync db: ${error.message}`);
  });