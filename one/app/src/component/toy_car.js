import { Model, DataTypes } from "sequelize";
import { sequelize } from "../configuration/db_config.js";

class ToyCar extends Model {

}

ToyCar.init({
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
    modelName: "ToyCar",
    tableName: "toy_cars",
})

export { ToyCar };