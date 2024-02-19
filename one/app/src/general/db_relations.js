import { ToyCar } from "../component/toy_car/toy_car.js"
import { Lamp } from "../component/lamp/lamp.js";
import { ChocolateBar } from "../component/chocolate_bar/chocolate_bar.js";
import { Tag } from "../component/tag/tag.js";
import { Taggable } from "../component/other/taggable/taggable.js";

export function setupModelRelations() {

  ToyCar.belongsToMany(Tag, {
    through: {
      model: Taggable,
      unique: false,
      scope: {
        taggableType: "toyCar",
      },
    },
    foreignKey: "taggable_id",
    constraints: false,
  })

  Tag.belongsToMany(ToyCar, {
    through: {
      model: Taggable,
      unique: false,
    },
    foreignKey: "tag_id",
    constraints: false,
  })

  Lamp.belongsToMany(Tag, {
    through: {
      model: Taggable,
      unique: false,
      scope: {
        taggableType: "lamp",
      },
    },
    foreignKey: "taggable_id",
    constraints: false,
  })

  Tag.belongsToMany(Lamp, {
    through: {
      model: Taggable,
      unique: false,
    },
    foreignKey: "tag_id",
    constraints: false,
  })

  ChocolateBar.belongsToMany(Tag, {
    through: {
      model: Taggable,
      unique: false,
      scope: {
        taggableType: "chocolateBar",
      },
    },
    foreignKey: "taggable_id",
    constraints: false,
  })

  Tag.belongsToMany(ChocolateBar, {
    through: {
      model: Taggable,
      unique: false,
    },
    foreignKey: "tag_id",
    constraints: false,
  })
}