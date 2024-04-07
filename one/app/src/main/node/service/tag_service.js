import { Tag } from "../component/tag.js";

export function getTagCreateForm() {
    response.send("This URL is under construction");
}

export function createTag(tag) {
    return Tag.create(tag)
        .then((tag) => {
            return tag;
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagEditForm(request, response) {

}

export function updateTagById(request, response) {

}

export function removeAllTags(request, response) {
    return Tag.destroy({ where: {} })
        .then((rows) => {
            return rows;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeTagById(request, response) {

}

export function getAllTags(request, response) {
    return Tag.findAll({})
        .then((tags) => {
            return tags;
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagById(request, response) {

}