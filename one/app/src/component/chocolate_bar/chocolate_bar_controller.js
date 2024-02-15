import { ChocolateBar } from "./chocolate_bar.js";
import { Tag } from "../tag/tag.js";

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

export function attachTagToChocolateBarById() {

}

// exports.addTag = (toyCarId, tagId) => Tag.findByPk(tagId)
//     .then((tag) => {
//         if (!tag) {
//             console.log('Tag not found!');
//             return null;
//         }
//         return ToyCar.findByPk(toyCarId)
//             .then((toyCar) => {
//                 if (!toyCar) {
//                     console.log('ToyCar not found!');
//                     return null;
//                 }
//                 toyCar.addTag(tag);
//                 console.log(`>> added Tag id=${tag.id} to ToyCar id=${toyCar.id}`);
//                 return toyCar;
//             });
//     })
//     .catch((err) => {
//         console.log('>> Error while adding Tag to ToyCar: ', err);
//     });