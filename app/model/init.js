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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize; 

db.tags = require("./tag.js")(sequelize, Sequelize);
db.toyCars = require("./toy_car.js")(sequelize, Sequelize);
db.lamps = require("./lamp.js")(sequelize, Sequelize);
db.chocolateBars = require("./chocolate_bar.js")(sequelize, Sequelize);

db.toyCars.hasMany(db.tags, {
  foreignKey: "taggable_id",
  constraints: false,
  scope: {
    taggableType: "toyCar"
  }
});

db.lamps.hasMany(db.tags, {
  foreignKey: "taggable_id",
  constraints: false,
  scope: {
    taggableType: "lamp"
  }
});

db.chocolateBars.hasMany(db.tags, {
  foreignKey: "taggable_id",
  constraints: false,
  scope: {
    taggableType: "chocolateBar"
  }
});

db.tags.belongsTo(db.toyCars, { foreignKey: "taggable_id", constraints: false });
db.tags.belongsTo(db.lamps, { foreignKey: "taggable_id", constraints: false });
db.tags.belongsTo(db.chocolateBars, { foreignKey: "taggable_id", constraints: false });

db.tags.addHook("afterFind", findResult => {
  if (!Array.isArray(findResult)) findResult = [findResult];
  for (const instance of findResult) {
    if (instance.taggableType === "toyCar" && instance.toyCar !== undefined) {
      instance.taggable = instance.toyCar;
    } else if (instance.commentableType === "lamp" && instance.lamp !== undefined) {
      instance.taggable = instance.lamp;
    }  else if (instance.commentableType === "chocolateBar" && instance.chocolateBar !== undefined) {
      instance.taggable = instance.chocolateBar;
    }

    // To prevent mistakes:
    delete instance.toyCar;
    delete instance.dataValues.toyCar;
    delete instance.lamp;
    delete instance.dataValues.lamp;
    delete instance.chocolateBar;
    delete instance.dataValues.chocolateBar;
  }
});

module.exports = db;