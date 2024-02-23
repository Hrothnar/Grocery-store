import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../configuration/db_config.js";

class Customer extends Model {

}

Customer.init({
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
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
        field: "is_active"
    },
}, {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Customer",
    tableName: "customers",
});

export { Customer };
