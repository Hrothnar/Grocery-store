export function sendCreatedResponse(data, response) {
    response.status(201);
    response.send(`Created model: ${JSON.stringify(data, null, 2)}`);
}

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

export function returnCreatedResponse(data, response) {
    response.status(200);
    response.send(data);
}

export function returnUpdatedResponse(data, response) {
    response.status(200);
    response.send(data);
}

export function returnDeletedResponse(data, response) {
    response.status(200);
    response.send(String(data));
}

export function returnGotResponse(data, response) {
    response.status(200);
    response.send(data);
}