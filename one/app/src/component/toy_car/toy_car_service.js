import { ToyCar } from "../toy_car/toy_car.js";
import { Tag } from "../tag/tag.js";

export function createToyCar(toyCar) {

}

export function updateToyCar(toyCar, id) {

}

export function removeAllToyCars() {

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