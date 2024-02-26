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

}
