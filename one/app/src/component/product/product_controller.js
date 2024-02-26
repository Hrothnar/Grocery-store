import * as productService from "./product_service.js";
import * as productValidator from "./product_service.js";
import * as responseSender from "../../sender/response_sender.js";

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
    response.send("This URL is under construction");
}

export function removeProductById(request, response) {
    response.send("This URL is under construction");
}

export function getAllProducts(request, response) {
    productService.getAllProducts()
        .then((products) => {
            responseSender.sendGotResponse(products.data, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getProductById(request, response) {
}