import { express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { sequelize } from "./app/src/general/db_connection.js";
import { chocolateBarRouter } from "./app/src/component/chocolate_bar/chocolate_bar_router";
import { lampRouter } from "./app/src/component/lamp/lamp_router.js";
import { toyCarRouter } from "./app/src/component/toy_car_router.js";
import { tagRouter } from "./app/src/component/tag/tag_router.js";
import { mainRouter } from "./app/src/component/other/main/main_router.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

chocolateBarRouter(app);
lampRouter(app);
toyCarRouter(app);
tagRouter(app);
mainRouter(app);

sequelize.sync({ force: true })
  .then(() => {
    console.log("Sequelize schemas was created");
    console.log('============================================================================ \n');
  })
  .catch((error) => {
    console.log(`Failed to sync db: ${error.message}`);
  });

app.listen(port, () => {
  console.log("\n=================================================================");
  console.log(`The express.js server has started and is listening on port: ${port}`);
});
