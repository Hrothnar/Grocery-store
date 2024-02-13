import { Sequelize } from "sequelize";
import { ToyCar } from "../component/toy_car/toy_car.js"
import { Lamp } from "../component/lamp/lamp.js";
import { ChocolateBar } from "../component/chocolate_bar/chocolate_bar.js";
import { Tag } from "../component/tag/tag.js";
import { Taggable } from "../component/other/taggable/taggable.js";

const connectionParameters = {
  HOST: process.env.POSTGRES_HOST_ONE,
  USER: process.env.POSTGRES_USER_ONE,
  PASSWORD: process.env.POSTGRES_PASSWORD_ONE,
  DB: process.env.POSTGRES_DB_ONE,
  dialect: process.env.DB_DIALECT_ONE,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const sequelize = new Sequelize(connectionParameters);

ToyCar.belongsToMany(Tag, {
  through: {
    model: Taggable,
    unique: false,
    scope: {
      taggableType: "toy_cars",
    },
  },
  foreignKey: "taggable_id",
  constraints: false,
});

Lamp.belongsToMany(Tag, {
  through: {
    model: Taggable,
    unique: false,
    scope: {
      taggableType: "lamps",
    },
  },
  foreignKey: "taggable_id",
  constraints: false,
});

ChocolateBar.belongsToMany(Tag, {
  through: {
    model: Taggable,
    unique: false,
    scope: {
      taggableType: "chocolate_bars",
    },
  },
  foreignKey: "taggable_id",
  constraints: false,
});

Tag.belongsToMany(ToyCar, {
  through: {
    model: Taggable,
    unique: false,
  },
  foreignKey: "tag_id",
  constraints: false,
});

Tag.belongsToMany(Lamp, {
  through: {
    model: Taggable,
    unique: false,
  },
  foreignKey: "tag_id",
  constraints: false,
});

Tag.belongsToMany(ChocolateBar, {
  through: {
    model: Taggable,
    unique: false,
  },
  foreignKey: "tag_id",
  constraints: false,
});

export { sequelize };
