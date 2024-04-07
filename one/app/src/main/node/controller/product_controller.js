import * as productService from "../service/product_service.js";
import * as productValidator from "../validator/product_validator.js";
import * as responseSender from "../process/sender/response_sender.js";

export function getProductCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createProduct(request, response) {
    response.send("This URL is under construction");
}

export function getProductEditFormById(request, response) {
    response.send("This URL is under construction");
}

export function updateProductById(request, response) {
    response.send("This URL is under construction");
}

export function removeAllProducts(request, response) {
    productService.removeAllProducts()
        .then((rows) => {
            responseSender.sendDeletedResponse(rows, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function removeProductById(request, response) {
    response.send("This URL is under construction");
}

export function getAllProducts(request, response) {
    productService.getAllProducts()
        .then((products) => {
            responseSender.sendGotResponse(products, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getProductById(request, response) {
    productService.getProductById(request.params.id)
        .then((product) => {
            responseSender.sendGotResponse(product, response);
        })
        .catch((error) => {
            throw error;
        })
}