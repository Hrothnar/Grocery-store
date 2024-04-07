import axios from "axios";

import * as chocolateBarService from "../service/chocolate_bar_service.js";
import * as lampService from "../service/lamp_service.js";
import * as toyCarService from "../service/tag_service.js";

const host = process.env.BACKEND_CONTAINER_NAME_TWO;
const port = process.env.APP_PORT_TWO;

export function getProductCreateForm() {

}

export function createProduct(product) {

}

export function getProductEditFormById(id) {

}

export function updateProductById(product, id) {

}

export function removeAllProducts() {
    return axios.delete(`http://${host}:${port}/product`)
        .then((productRows) => {
            return chocolateBarService.removeAllChocolateBars()
                .then((chocolateBarRows) => {
                    return toyCarService.removeAllToyCars()
                        .then((toyCarRows) => {
                            return lampService.removeAllLamps()
                                .then((lampRows) => {
                                    return productRows.data;
                                })
                                .catch((error) => {
                                    throw error;
                                });
                        })
                        .catch((error) => {
                            throw error;
                        });
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

export function removeProductById(id) {

}

export function getAllProducts() {
    return axios.get(`http://${host}:${port}/product`)
        .then((products) => {
            return getPreparedProducts(products.data)
                .then((preparedProducts) => {
                    return preparedProducts;
                })
                .catch((error) => {
                    throw error;
                })
        })
        .catch((error) => {
            throw error;
        })
}

export function getProductById(id) {
    return axios.get(`http://${host}:${port}/product/${id}`)
        .then((product) => {
            return getPreparedProduct(product.data)
                .then((preparedProduct) => {
                    return preparedProduct;
                })
                .catch((error) => {
                    throw error;
                })
        })
        .catch((error) => {
            throw error;
        })
}

async function getPreparedProducts(productsFromTwo) {
    const map = await getMappedProducts();
    for (const productFromTwo of productsFromTwo) {
        const productType = map[productFromTwo.productType];
        const productFromOne = productType[productFromTwo.productId];
        productFromTwo.id = productFromOne.id;
        productFromTwo.name = productFromOne.name;
        productFromTwo.Tags = productFromOne.Tags;
        delete productFromTwo.productId;
    }
    return productsFromTwo;
}

async function getPreparedProduct(productFromTwo) {
    const map = await getMappedProducts();
    const productType = map[productFromTwo.productType];
    const productFromOne = productType[productFromTwo.productId];
    productFromTwo.id = productFromOne.id;
    productFromTwo.name = productFromOne.name;
    productFromTwo.Tags = productFromOne.Tags;
    delete productFromTwo.productId;
    return productFromTwo;
}

async function getMappedProducts() {
    const chocolateBars = await chocolateBarService.getAllChocolateBars();
    const lamps = await lampService.getAllLamps();
    const toyCars = await toyCarService.getAllToyCars();

    let map = {};
    const productsFromOne = [chocolateBars, lamps, toyCars];
    for (const productType of productsFromOne) {
        if (productType[0]) {
            map[productType[0].constructor.name] = {};
        }
        for (const product of productType) {
            map[product.constructor.name][product.dataValues.id] = product.dataValues;

        }
    }
    return map;
}