export function validateTag(requestBody) {
    return new Promise((resolve, reject) => {
        const tag = {
            name: requestBody.name,
        };

        if (requestBody.name !== "Strange") {
            return resolve(tag);
        }
        return reject(new Error("Validation failed"));
    });
}
