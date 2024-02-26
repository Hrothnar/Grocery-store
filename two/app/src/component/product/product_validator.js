export function validateProduct(requestBody) {
    return new Promise((resolve, reject) => {
        const product = {
            productId: requestBody.productId,
            productType: requestBody.productType,
            category: requestBody.category,
            price: requestBody.price,
            amount: requestBody.amount,
            isAvailable: requestBody.isAvailable
        };
        if (requestBody.name !== "Something") {
            return resolve(product);
        }
        return reject(new Error("Validation failed"));
    })
};