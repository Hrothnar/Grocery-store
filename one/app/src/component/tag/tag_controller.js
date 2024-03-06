import * as tagValidator from "./tag_validator.js";
import * as tagService from "./tag_service.js";
import * as responseSender from "../../sender/response_sender.js";

export function getTagCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createTag(request, response) {
    tagValidator.validateTag(request.body)
        .then((tag) => {
            tagService.createTag(tag)
                .then((tag) => {
                    responseSender.sendCreatedResponse(tag, response);
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagEditForm(request, response) {
    response.send("This URL is under construction");
}

export function updateTagById(request, response) {
    response.send("This URL is under construction");
}

export function removeAllTags(request, response) {
    tagService.removeAllTags()
        .then((rows) => {
            responseSender.sendDeletedResponse(rows, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function removeTagById(request, response) {
    response.send("This URL is under construction");
}

export function getAllTags(request, response) {
    tagService.getAllTags()
        .then((tags) => {
            responseSender.sendGotResponse(tags, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getTagById(request, response) {
    response.send("This URL is under construction");
}