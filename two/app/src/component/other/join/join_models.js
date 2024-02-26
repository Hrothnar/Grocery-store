import { DataTypes } from "sequelize";

import { sequelize } from "../../../configuration/db_config.js";
import { Sale } from "../../sale/sale.js";
import { Product } from "../../product/product.js";
import { Customer } from "../../customer/customer.js";

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

const SaleProduct = sequelize.define("SaleProduct", {
    sale_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Sale,
            key: "id"
        },
    },
    product_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Product,
            key: "id"
        },
    },
}, {
    tableName: "sale_product",
    timestamps: false
});

export { SaleCustomer, SaleProduct };