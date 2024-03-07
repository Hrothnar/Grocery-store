import axios from "axios";

import { ChocolateBar } from "./chocolate_bar.js";
import { Tag } from "../tag/tag.js";
import { Taggable } from "../other/join/join_models.js";

const host = process.env.BACKEND_CONTAINER_NAME_TWO;
const port = process.env.APP_PORT_TWO;

export function createChocolateBar(chocolateBar) {
    return ChocolateBar.create(chocolateBar)
        .then((model) => {
            return axios.post(`http://${host}:${port}/product/create`, {
                ...chocolateBar,
                productId: model.dataValues.id,
                productType: "ChocolateBar"
            })
                .then((product) => {
                    return product.data;
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

export function updateChocolateBarById(chocolateBar, id) {
    return ChocolateBar.update(chocolateBar, { where: { id: id } })
        .then((array) => {
            return array;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeAllChocolateBars() {
    return ChocolateBar.destroy({ where: {} })
        .then((chocolateRows) => {
            return Taggable.destroy({ where: { taggable_type: "chocolateBar" } })
                .then((taggableRows) => {
                    return chocolateRows;
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

export function removeChocolateBarById(id) {
    return ChocolateBar.destroy({ where: { id: id } })
        .then((row) => {
            return row;
        })
        .catch((error) => {
            throw error;
        });
}

export function getAllChocolateBars() {
    const include = {
        model: Tag,
        through: "taggables", // if use the 'Taggable' Model as an argument then it'll include Tags only for the first call and i don't know why
    };

    return ChocolateBar.findAll({ include: include })
        .then((chocolateBars) => {
            return chocolateBars;
        })
        .catch((error) => {
            throw error;
        });
}

export function getChocolateBarById(id) {
    return ChocolateBar.findOne({ id: id })
        .then((chocolateBar) => {
            return chocolateBar;
        })
        .catch((error) => {
            throw error;
        });
}

export function attachTagToChocolateBarById(chocolateBarId, tagId) {
    return ChocolateBar.findByPk(chocolateBarId)
        .then((chocolateBar) => {
            return Tag.findByPk(tagId)
                .then((tag) => {
                    chocolateBar.addTag(tag);
                    return chocolateBar;
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}
