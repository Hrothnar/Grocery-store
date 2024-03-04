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
        include: {
            model: Tag,
            through: "taggables",
            attributes: ["id", "name"]
        },
        attributes: ["id", "name"]
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