import { Model, DataTypes } from "sequelize";
import { sequelize } from "../configuration/db_config.js";

class Lamp extends Model {

}

Lamp.init({
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        field: "id",
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "name"
    }
}, {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Lamp",
    tableName: "lamps"
});

export { Lamp };
