
/**
 * This is a synchronous function for changing port in URL.
 * @param {*} request 
 * @param {String} port 
 */
export function constructUrl(request, port) {
    return `${request.protocol}://${request.hostname}:${port}${request.originalUrl}`;
}