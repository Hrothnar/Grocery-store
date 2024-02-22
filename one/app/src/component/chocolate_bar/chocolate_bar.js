import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../configuration/db_config.js";

class ChocolateBar extends Model {

}

ChocolateBar.init({
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
    timestamps: true,
    modelName: "ChocolateBar",
    tableName: "chocolate_bars"
})

export { ChocolateBar };