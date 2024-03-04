import { Product } from "./product.js";

export function getProductCreateForm() {

}

export function createProduct(product) {
    return Product.create(product)
        .then((product) => {
            return product;
        })
        .catch((error) => {
            throw error;
        });
}

export function getProductEditFormById(id) {

}

export function updateProductById(product, id) {

}

export function removeAllProducts() {
    return Product.destroy({ where: {} })
        .then((rows) => {
            return rows;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeProductById(id) {

}

export function getAllProducts() {
    return Product.findAll({})
        .then((products) => {
            return products;
        })
        .catch((error) => {
            throw error;
        });

}

export function getProductById(id) {
    return Product.findOne({ where: { id: id } })
        .then((products) => {
            return products;
        })
        .catch((error) => {
            throw error;
        });
}
