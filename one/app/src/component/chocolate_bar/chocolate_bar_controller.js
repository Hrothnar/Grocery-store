import * as chocolateBarValidator from "./chocolate_bar_validator.js";
import * as chocolateBarService from "./chocolate_bar_service.js";
import * as responseSender from "../../sender/response_sender.js";

export function getChocolateBarCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createChocolateBar(request, response) {
    chocolateBarValidator.validateChocolateBar(request.body)
        .then((chocolateBar) => {
            chocolateBarService.createChocolateBar(chocolateBar)
                .then((chocolateBar) => {
                    responseSender.sendCreatedResponse(chocolateBar, response);
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

// export function createChocolateBar(request, response, next) {
//     next();
// }

export function getChocolateBarEditFormById(request, response) {
    response.send("This URL is under construction");
}

export function updateChocolateBarById(request, response) {
    chocolateBarValidator.validateChocolateBar(request.body)
        .then((chocolateBar) => {
            chocolateBarService.updateChocolateBar(chocolateBar, request.params.id)
                .then((array) => {
                    responseSender.sendUpdatedResponse(array, response);
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

export function removeAllChocolateBars(request, response) {
    chocolateBarService.removeAllChocolateBars()
        .then((rows) => {
            responseSender.sendDeletedResponse(rows, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function removeChocolateBarById(request, response) {
    chocolateBarService.removeChocolateBarById(request.params.id)
        .then((row) => {
            responseSender.sendDeletedResponse(row, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getAllChocolateBars(request, response) {
    chocolateBarService.getAllChocolateBars()
        .then((chocolateBars) => {
            responseSender.sendGotResponse(chocolateBars, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getChocolateBarById(request, response) {
    chocolateBarService.getChocolateBarById(request.params.id)
        .then((chocolateBar) => {
            responseSender.sendGotResponse(chocolateBar, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function attachTagToChocolateBarById(request, response) {
    chocolateBarService.attachTagToChocolateBarById(request.params.chocolateBarId, request.params.tagId)
        .then((chocolateBar) => {
            responseSender.sendGotResponse(chocolateBar, response);
        })
        .catch((error) => {
            throw error;
        });
}