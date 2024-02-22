export function sendCreatedResponse(data, response) {
    response.status(201);
    response.send(`Created model: ${JSON.stringify(data, null, 2)}`);
}

// export function sendCreatedResponse(request, response) {
//     const chocolateBar = {
//         name: request.body.name,
//         type: request.body.type,
//         price: request.body.price,
//         amount: request.body.amount,
//         isAvailable: request.body.isAvailable
//     };
//     response.status(201);
//     response.send(`Created model: ${JSON.stringify(chocolateBar, null, 2)}`);
//     console.log("Model has been sent");
// }

export function sendUpdatedResponse(data, response) {
    response.status(200);
    response.send("The model has been updated");
}

export function sendDeletedResponse(data, response) {
    response.status(200);
    response.send(`${data} models have been deleted`);
}

export function sendGotResponse(data, response) {
    response.status(200);
    response.send(data);
}