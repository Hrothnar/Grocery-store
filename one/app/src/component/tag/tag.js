import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../general/db_connection.js";

class Tag extends Model {

  async getTaggables(options) {
    const toyCar = await this.getToyCars(options);
    const lamp = await this.getLamps(options);
    const chocolateBar = await this.getChocolateBars(options);
    toyCar.concat(lamp);
    toyCar.concat(chocolateBar);
    return toyCar;
  };
};

Tag.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: "name",
  },
}, {
  sequelize: sequelize,
  timestamps: false,
  modelName: "Tag",
  tableName: "tags",
});

/**
 * A Sequelize hook which intercepts responses after finding Tag
 */
Tag.addHook("afterFind", (result) => {
  if (!Array.isArray(result)) {
    result = [result];
  };
  for (const one of result) {
    if (one.taggableType === "toyCar" && one.toyCar !== undefined) {
      one.taggable = one.toyCar;
    } else if (one.taggableType === "lamp" && one.lamp !== undefined) {
      one.taggable = one.lamp;
    } else if (one.taggableType === "chocolateBar" && one.chocolateBar !== undefined) {
      one.taggable = one.chocolateBar;
    }
    delete one.toyCar;
    delete one.dataValues.toyCar;
    delete one.lamp;
    delete one.dataValues.lamp;
    delete one.chocolateBar;
    delete one.dataValues.chocolateBar;
  }
});

export { Tag };