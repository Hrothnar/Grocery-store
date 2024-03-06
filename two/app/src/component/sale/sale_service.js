import { Product } from "../product/product.js";
import { Customer } from "../customer/customer.js";
import { Sale } from "./sale.js";

export function getSaleCreateForm() {

}

export function createSale(customerId, productId) {
    const sale = {
        productId: productId,
        deliveryDate: String(new Date())
    };

    return Sale.create(sale)
        .then((sale) => {
            sale.addProducts([productId]);
            sale.addCustomers([customerId]);
            return sale;
        })
        .catch((error) => {
            throw error;
        });
}

export function getSaleEditFormById(id) {

}

export function updateSaleById(sale, id) {

}

export function removeAllSales() {
    return Sale.destroy({ where: {} })
        .then((rows) => {
            return rows;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeSaleById(id) {

}

export function getAllSales() {
    const include = [{
        model: Product,
        through: "sale_product",
    }, {
        model: Customer,
        through: "sale_customer",
    }];

    return Sale.findAll({ include: include })
        .then((sales) => {
            return sales;
        })
        .catch((error) => {
            throw error;
        });
}

export function getSaleById(id) {
    const include = [{
        model: Product,
        through: "sale_product",
    }, {
        model: Customer,
        through: "sale_customer",
    }];

    return Sale.findOne({ include: include, where: { id: id } })
        .then((sale) => {
            return sale;
        })
        .catch((error) => {
            throw error;
        });
}
