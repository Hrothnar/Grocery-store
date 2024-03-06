export function validateCustomer(requestBody) {
    return new Promise((resolve, reject) => {
        const customer = {
            name: requestBody.name,
            isActive: requestBody.isActive
        }

        if (requestBody.name !== "Dude") {
            return resolve(customer);
        }
        return reject(new Error("Validation failed"));
    });
}
