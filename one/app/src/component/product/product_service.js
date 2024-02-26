import axios from "axios";
import { ChocolateBar } from "../chocolate_bar/chocolate_bar.js";
import { Lamp } from "../lamp/lamp.js";
import { ToyCar } from "../toy_car/toy_car.js";
import { Tag } from "../tag/tag.js";


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
            return getPreparedProducts(products)
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
    const chocolateBars = await ChocolateBar.findAll({});
    const lamps = await Lamp.findAll({});
    const toyCars = await ToyCar.findAll({});

    const all = {
        ChocolateBar: {},
        Lamp: {},
        ToyCar: {}
    };

    for (const chocolateBar of chocolateBars) {
        all.ChocolateBar[chocolateBar.dataValues.id] = chocolateBar.dataValues;
    }

    for (const lamp of lamps) {
        all.ChocolateBar[lamp.dataValues.id] = lamp.dataValues;
    }

    for (const toyCar of toyCars) {
        all.ChocolateBar[toyCar.dataValues.id] = toyCar.dataValues;
    }

    for (const one of products) {
        one.name = all[one.productType][one.productId][one.name];
    }


    console.log(products)

    // const some = {ChocolateBar: chocolateBarsMap}
    // console.log(some);



}

function getHash(param1, param2) {

}