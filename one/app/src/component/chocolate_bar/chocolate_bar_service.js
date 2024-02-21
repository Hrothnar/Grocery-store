import { ChocolateBar } from "./chocolate_bar.js";
import { Tag } from "../tag/tag.js";

// export function createChocolateBar(chocolateBar) {
//     return ChocolateBar.create(chocolateBar)
//         .then((chocolateBar) => {
//             // some additional logic
//             console.log("ChocolateBar has been serviced");
//             return chocolateBar;
//         })
//         .catch((error) => {
//             throw error;
//         });
// }

export function createChocolateBar(request, response, next) {
    ChocolateBar.create({
        name: request.body.name,
        type: request.body.type,
        price: request.body.price,
        amount: request.body.amount,
        isAvailable: request.body.isAvailable
    })
        .then((chocolateBar) => {
            // some additional logic
            console.log("ChocolateBar has been serviced");
            return next();
        })
        .catch((error) => {
            next(error);
        });
}