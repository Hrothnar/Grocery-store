import { ChocolateBar } from "./chocolate_bar.js";
import { Tag } from "../tag/tag.js";

export function createChocolateBar(chocolateBar) {
    return ChocolateBar.create(chocolateBar)
        .then((chocolateBar) => {
            return chocolateBar;
        })
        .catch((error) => {
            throw error;
        });
}

// export function createChocolateBar(request, response, next) {
//     ChocolateBar.create({
//         name: request.body.name,
//         type: request.body.type,
//         price: request.body.price,
//         amount: request.body.amount,
//         isAvailable: request.body.isAvailable
//     })
//         .then((chocolateBar) => {
//             // some additional logic
//             console.log("ChocolateBar has been serviced");
//             return next();
//         })
//         .catch((error) => {
//             next(error);
//         });
// }

export function updateChocolateBar(chocolateBar, id) {
    return ChocolateBar.update(chocolateBar, { where: { id: id } })
        .then((array) => {
            return array;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeAllChocolateBars() {
    return ChocolateBar.destroy({ where: {} })
        .then((rows) => {
            return rows;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeChocolateBarById(id) {
    return ChocolateBar.destroy({ where: { id: id } })
        .then((row) => {
            return row;
        })
        .catch((error) => {
            throw error;
        });
}
export function getAllChocolateBars() {
    return ChocolateBar.findAll({})
        .then((chocolateBars) => {
            return chocolateBars;
        })
        .catch((error) => {
            throw error;
        });
}


export function getChocolateBarById(id) {
    return ChocolateBar.findOne({ id: id })
        .then((chocolateBar) => {
            return chocolateBar;
        })
        .catch((error) => {
            throw error;
        });
}

export function attachTagToChocolateBarById(chocolateBarId, tagId) {
    return ChocolateBar.findByPk(chocolateBarId)
        .then((chocolateBar) => {
            Tag.findByPk(tagId)
                .then((tag) => {
                    chocolateBar.addTag(tag);
                    return chocolateBar;
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}