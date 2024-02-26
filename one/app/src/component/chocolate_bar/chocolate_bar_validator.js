export function validateChocolateBar(requestBody) {
    return new Promise((resolve, reject) => {
        const chocolateBar = {
            name: requestBody.name,
            category: requestBody.category,
            price: requestBody.price,
            amount: requestBody.amount,
            isAvailable: requestBody.isAvailable
        }
        if (requestBody.name !== "Snickers") {
            return resolve(chocolateBar);
        }
        return reject(new Error("Validation failed"));
    });
}

// export function validateChocolateBar(request, response, next) {
//     const chocolateBar = {
//         name: request.body.name,
//         type: request.body.type,
//         price: request.body.price,
//         amount: request.body.amount,
//         isAvailable: request.body.isAvailable
//     };
//     if (chocolateBar.name !== "Snickers") {
//         console.log("ChocolateBar has been validate");
//         return next()
//     }
//     return next(new Error("Validation failed"));
// }