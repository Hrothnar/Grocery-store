import { Tag } from "./tag.js";

export function getTagCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createTag(request, response) {
    Tag.create({
        name: request.body.name
    })
        .then((chocolateBar) => {
            console.log(`Created Tag: ${JSON.stringify(chocolateBar, null, 2)}`);
            response.send(`Created Tag: ${JSON.stringify(chocolateBar, null, 2)}`)
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagEditForm(request, response) {
    response.send("This URL is under construction");
}

export function updateTag(request, response) {
    response.send("This URL is under construction");
}

export function removeAllTags(request, response) {
    Tag.destroy({ where: {} })
        .then(() => {
            response.send("All entities were deleted");
        })
        .catch((error) => {
            throw error;
        });
}

export function removeTagById(request, response) {
    response.send("This URL is under construction");
}

export function getAllTags(request, response) {
    Tag.findAll({})
        .then((tags) => {
            response.send(tags);
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagById(request, response) {
    response.send("This URL is under construction");
}