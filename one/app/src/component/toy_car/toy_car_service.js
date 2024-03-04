import { ToyCar } from "../toy_car/toy_car.js";
import { Tag } from "../tag/tag.js";
import { Taggable } from "../other/taggable/taggable.js";

export function createToyCar(toyCar) {

}

export function updateToyCar(toyCar, id) {

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
        include: {
            model: Tag,
            through: "taggables",
            attributes: ["id", "name"]
        },
        attributes: ["id", "name"]
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