const dbConfig = require("../config/db_config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

// const sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: "../../node_modules/sqlite3",
    
//     pool: {
//       max: dbConfig.pool.max,
//       min: dbConfig.pool.min,
//       acquire: dbConfig.pool.acquire,
//       idle: dbConfig.pool.idle
//     }
//   });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize; 

db.products = require("./product.js")(sequelize, Sequelize);
db.toyCars = require("./toy_car.js")(sequelize, Sequelize);
db.lamps = require("./lamp.js")(sequelize, Sequelize);
db.chocolateBars = require("./chocolate_bar.js")(sequelize, Sequelize);



module.exports = db;