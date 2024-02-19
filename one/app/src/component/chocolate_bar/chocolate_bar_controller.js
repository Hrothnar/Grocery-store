import { ChocolateBar } from "./chocolate_bar.js";
import { Tag } from "../tag/tag.js";
import { ToyCar } from "../toy_car/toy_car.js";

export function getChocolateBarCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createChocolateBar(request, response) {
    ChocolateBar.create({
        name: request.body.name,
        type: request.body.type,
        price: request.body.price,
        amount: request.body.amount,
        isAvailable: request.body.isAvailable
    })
        .then((chocolateBar) => {
            console.log(`Created ChocolateBar: ${JSON.stringify(chocolateBar, null, 2)}`);
            response.send(`Created ChocolateBar: ${JSON.stringify(chocolateBar, null, 2)}`)
        })
        .catch((error) => {
            throw error;
        });
}

export function getChocolateBarEditFormById(request, response) {
    response.send("This URL is under construction");
}

export function updateChocolateBarById(request, response) {
    const update = {
        name: request.body.name,
        type: request.body.type,
        price: request.body.price,
        amount: request.body.amount,
        isAvailable: request.body.isAvailable
    };

    ChocolateBar.update(update, { where: { id: request.parameters.id } })
        .then(() => {
            response.send("This entity was updated");
        })
        .catch((error) => {
            throw error;
        });
}

export function removeAllChocolateBars(request, response) {
    ChocolateBar.destroy({ where: {} })
        .then(() => {
            response.send("All entities were deleted");
        })
        .catch((error) => {
            throw error;
        });
}

export function removeChocolateBarById(request, response) {
    ChocolateBar.destroy({ where: { id: request.parameters.id } })
        .then(() => {
            response.send("This entity was deleted");
        })
        .catch((error) => {
            throw error;
        });
}

export function getAllChocolateBars(request, response) {
    ChocolateBar.findAll({})
        .then((chocolateBars) => {
            response.send(chocolateBars);
        })
        .catch((error) => {
            throw error;
        });
}

export function getChocolateBarById(request, response) {
    ChocolateBar.findOne({ id: request.parameters.id })
        .then((chocolateBar) => {
            response.send(chocolateBar);
        })
        .catch((error) => {
            throw error;
        });
}


export function attachTagToChocolateBarById(request, response) {
    ChocolateBar.findByPk(request.params.chocolateBarId)
        .then((chocolateBar) => {
            Tag.findByPk(request.params.tagId)
                .then((tag) => {
                    chocolateBar.addTag(tag);
                    // chocolateBar.save();
                    response.send("The tag has been added to the chocolateBar");
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}