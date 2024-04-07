import { fileLog } from "./file_logger.js";

export function log(request, response, next) {
    console.log(`Method: ${request.method}   URL: ${request.url}   Status Code: ${response.statusCode}
------------------------------------------------------------`);
    fileLog(request, response);
    return next();
};