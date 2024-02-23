import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../configuration/db_config.js";

class Sale extends Model {

}

Sale.init({
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        field: "id",
        primaryKey: true
    },
    productId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: false,
        field: "product_id"
    },
    deliveryData: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        field: "delivery_date"
    },
}, {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Sale",
    tableName: "sales",
});

export { Sale };
