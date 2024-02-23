import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../configuration/db_config.js";

class Product extends Model {

}

Product.init({
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
        allowNull: true,
        unique: false,
        field: "product_id",
    },
    productType: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        field: "product_type",
        references: null,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        field: "category"
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        unique: false,
        field: "price"
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        field: "amount"
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
        field: "is_available"
    }
}, {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Product",
    tableName: "products",
});

export { Product };
