import { Product } from "../component/product/product.js";
import { Customer } from "../component/customer/customer.js";
import { Sale } from "../component/sale/sale.js";
import { SaleCustomer, SaleProduct } from "../component/other/join/join_models.js";


export function setupModelRelations() {

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

    Sale.belongsToMany(Product, {
        through: SaleProduct,
        foreignKey: "sale_id",
        timestamps: false
    });

    Product.belongsToMany(Sale, {
        through: SaleProduct,
        foreignKey: "product_id",
        timestamps: false
    });
}