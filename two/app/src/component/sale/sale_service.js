import { Product } from "../product/product.js";
import { Sale } from "./sale.js";

export function getSaleCreateForm() {

}

export function createSale(productId) {
    const sale = {
        productId: productId,
        deliveryDate: String(new Date())
    };

    return Sale.create(sale)
        .then((sale) => {
            sale.addProducts([productId]);
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
    const include = {
        model: Product,
        through: "sale_product",
    };

    return Sale.findAll({ include: include })
        .then((sales) => {
            return sales;
        })
        .catch((error) => {
            throw error;
        });
}

export function getSaleById(id) {
    const include = {
        model: Product,
        through: "sale_product",
    };

    return Sale.findOne({ include: include, where: { id: id } })
        .then((sale) => {
            return sale;
        })
        .catch((error) => {
            throw error;
        });
}
