import express from "express";
import cors from "cors";

import { sequelize } from "./app/src/general/db_connection.js";
import { setupModelRelations } from "./app/src/general/db_relations.js";
import { registerAppRouters } from "./app/src/general/router_register.js";

const app = express();

const port = process.env.APP_PORT_ONE;

app.use(cors());
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

setupModelRelations();
registerAppRouters(app);

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