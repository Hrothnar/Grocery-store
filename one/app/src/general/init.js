const Sequelize = require('sequelize');
const dbConfig = require('../config/db_config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tags = require('../component/tag/tag.js')(sequelize, Sequelize);
db.taggables = require('./taggable.js')(sequelize, Sequelize);
db.toyCars = require('../component/toy_car/toy_car.js')(sequelize, Sequelize);
db.lamps = require('../component/lamp/lamp.js')(sequelize, Sequelize);
db.chocolateBars = require('../component/chocolate_bar/chocolate_bar.js')(sequelize, Sequelize);

db.toyCars.belongsToMany(db.tags, {
  through: {
    model: db.taggables,
    unique: false,
    scope: {
      taggableType: 'toy_cars',
    },
  },
  foreignKey: 'taggable_id',
  constraints: false,
});

db.lamps.belongsToMany(db.tags, {
  through: {
    model: db.taggables,
    unique: false,
    scope: {
      taggableType: 'lamps',
    },
  },
  foreignKey: 'taggable_id',
  constraints: false,
});

db.chocolateBars.belongsToMany(db.tags, {
  through: {
    model: db.taggables,
    unique: false,
    scope: {
      taggableType: 'chocolate_bars',
    },
  },
  foreignKey: 'taggable_id',
  constraints: false,
});

db.tags.belongsToMany(db.toyCars, {
  through: {
    model: db.taggables,
    unique: false,
  },
  foreignKey: 'tag_id',
  constraints: false,
});

db.tags.belongsToMany(db.lamps, {
  through: {
    model: db.taggables,
    unique: false,
  },
  foreignKey: 'tag_id',
  constraints: false,
});

db.tags.belongsToMany(db.chocolateBars, {
  through: {
    model: db.taggables,
    unique: false,
  },
  foreignKey: 'tag_id',
  constraints: false,
});

db.tags.addHook('afterFind', (findResult) => {
  if (!Array.isArray(findResult)) findResult = [findResult];
  for (const instance of findResult) {
    if (instance.taggableType === 'toyCar' && instance.toyCar !== undefined) {
      instance.taggable = instance.toyCar;
    } else if (instance.commentableType === 'lamp' && instance.lamp !== undefined) {
      instance.taggable = instance.lamp;
    } else if (instance.commentableType === 'chocolateBar' && instance.chocolateBar !== undefined) {
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
