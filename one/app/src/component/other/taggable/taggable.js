import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../../general/db_connection.js";

class Taggable extends Model {

};

Taggable.init({
  tagId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    field: "tag_id",
    primaryKey: true,
  },
  taggableType: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
    field: "taggable_type",
  },
  taggableId: {
    type: DataTypes.BIGINT,
    allowNull: true,
    unique: false,
    field: "taggable_id",
    references: null,
  },
}, {
  sequelize: sequelize,
  timestamps: false,
  modelName: "Taggable",
  tableName: "taggables",
});

export { Taggable };
