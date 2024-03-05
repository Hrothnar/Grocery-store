import { Lamp } from "./lamp.js";
import { Tag } from "../tag/tag.js";
import { Taggable } from "../other/taggable/taggable.js";

export function createLamp(lamp) {

}

export function updateLamp(lamp, id) {

}

export function removeAllLamps() {
    return Lamp.destroy({ where: {} })
        .then((lampRows) => {
            return Taggable.destroy({ where: { taggable_type: "lamp" } })
                .then((taggableRows) => {
                    return lampRows;
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });

}

export function removeLampById(id) {

}

export function getAllLamps() {
    const include = {
        model: Tag,
        through: "taggables", // if use the 'Taggable' Model as an argument then it'll include Tags only for the first call and i don't know why
    };

    return Lamp.findAll(include)
        .then((lamps) => {
            return lamps;
        })
        .catch((error) => {
            throw error;
        });
}

export function getLampById(id) {

}