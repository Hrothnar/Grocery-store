import { DataTypes } from "sequelize";

import { Product } from "../component/product/product.js";
import { Customer } from "../component/customer/customer.js";
import { Sale } from "../component/sale/sale.js";

import { sequelize } from "../configuration/db_config.js";

export function setupModelRelations() {

    const SaleCustomer = sequelize.define("SaleCustomer", {
        sale_id: {
            type: DataTypes.BIGINT,
            references: {
                model: Sale,
                key: "id"
            },
        },
        customer_id: {
            type: DataTypes.BIGINT,
            references: {
                model: Customer,
                key: "id"
            },
        },
    }, {
        tableName: "sale_customer",
        timestamps: false
    });

    Customer.belongsToMany(Sale, {
        through: SaleCustomer,
        foreignKey: "customer_id",
        timestamps: false
    });

    Sale.belongsToMany(Customer, {
        through: SaleCustomer,
        foreignKey: "sale_id",
        timestamps: false
    });

    // Sale.belongsToMany(Product, {
    //     through: "sale_product",
    //     // foreignKey: "sale_id",
    //     timestamps: false
    // });

    // Product.belongsToMany(Sale, {
    //     through: "sale_customer",
    //     // foreignKey: "product_id",
    //     timestamps: false
    // });
}