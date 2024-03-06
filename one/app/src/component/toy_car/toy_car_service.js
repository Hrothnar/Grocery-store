import { ToyCar } from "../toy_car/toy_car.js";
import { Tag } from "../tag/tag.js";
import { Taggable } from "../other/join/join_models.js";

export function createToyCar(toyCar) {

}

export function updateToyCarById(toyCar, id) {

}

export function removeAllToyCars() {
    return ToyCar.destroy({ where: {} })
        .then((toyCarRows) => {
            return Taggable.destroy({ where: { taggable_type: "toyCar" } })
                .then((taggableRows) => {
                    return toyCarRows;
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

export function removeToyCarById(id) {

}

export function getAllToyCars() {
    const include = {
        model: Tag,
        through: "taggables", // if use the 'Taggable' Model as an argument then it'll include Tags only for the first call and i don't know why
    };

    return ToyCar.findAll(include)
        .then((toyCars) => {
            return toyCars;
        })
        .catch((error) => {
            throw error;
        });
}

export function getToyCarById(id) {

}