import * as saleService from "../sale/sale_service.js";
import * as responseSender from "../../sender/response_sender.js";

export function getSaleCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createSale(request, response) {
    saleService.createSale(request.params.customerId, request.params.productId)
        .then((sale) => {
            responseSender.returnCreatedResponse(sale, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getSaleEditFormById(request, response) {
    response.send("This URL is under construction");
}

export function updateSaleById(request, response) {
    response.send("This URL is under construction");
}

export function removeAllSales(request, response) {
    saleService.removeAllSales()
        .then((rows) => {
            responseSender.returnDeletedResponse(rows, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function removeSaleById(request, response) {
    response.send("This URL is under construction");
}

export function getAllSales(request, response) {
    saleService.getAllSales()
        .then((sales) => {
            responseSender.returnGotResponse(sales, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getSaleById(request, response) {
    saleService.getSaleById(request.params.id)
        .then((sale) => {
            responseSender.returnGotResponse(sale, response);
        })
        .catch((error) => {
            throw error;
        });
}
