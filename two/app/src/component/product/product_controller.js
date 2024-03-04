import * as productValidator from "./product_validator.js";
import * as productService from "./product_service.js";
import * as responseSender from "../../sender/response_sender.js";
import { Product } from "./product.js";

export function getProductCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createProduct(request, response) {
    productValidator.validateProduct(request.body)
        .then((product) => {
            productService.createProduct(product)
                .then((product) => {
                    responseSender.returnCreatedResponse(product, response);
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
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
            responseSender.returnDeletedResponse(rows, response);
        })
        .catch((error) => {
            throw error;
        })
}

export function removeProductById(request, response) {
    response.send("This URL is under construction");
}

export function getAllProducts(request, response) {
    productService.getAllProducts()
        .then((products) => {
            responseSender.returnGotResponse(products, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getProductById(request, response) {
    productService.getProductById(request.params.id)
        .then((product) => {
            responseSender.returnGotResponse(product, response);
        })
        .catch((error) => {
            throw error;
        });
}
