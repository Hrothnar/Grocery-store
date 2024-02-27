import axios from "axios";
import * as chocolateBarService from "../chocolate_bar/chocolate_bar_service.js";
import * as lampService from "../lamp/lamp_service.js";
import * as toyCarService from "../toy_car/toy_car_service.js";


export function getProductCreateForm() {

}

export function createProduct(product) {

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
    return axios.get("http://127.0.0.1:3333/product")
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

}

async function getPreparedProducts(products) {
    // const chocolateBars = await chocolateBarService.getAllChocolateBars();
    // const lamps = await lampService.getAllLamps();
    // const toyCars = await toyCarService.getAllToyCars();

    const all = {
        ChocolateBar: await chocolateBarService.getAllChocolateBars(),
        Lamp: await lampService.getAllLamps(),
        ToyCar: await toyCarService.getAllToyCars()
    };

    for (const one of all) {
        for (const model of one) {
            all.one[model.dataValues.id] = model.dataValues;
        }
    }


    // for (const chocolateBar of chocolateBars) {
    //     all.ChocolateBar[chocolateBar.dataValues.id] = chocolateBar.dataValues;
    // }

    // for (const lamp of lamps) {
    //     all.ChocolateBar[lamp.dataValues.id] = lamp.dataValues;
    // }

    // for (const toyCar of toyCars) {
    //     all.ChocolateBar[toyCar.dataValues.id] = toyCar.dataValues;
    // }

    for (const one of products) {
        one.name = all[one.productType][one.productId]["name"];
        one.tags = all[one.productType][one.productId]["Tags"];
        one.id = one.productId;
        delete one.productId;
    }

    return products;
}