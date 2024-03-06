import * as customerValidator from "../customer/customer_validator.js";
import * as customerService from "../customer/customer_service.js";
import * as responseSender from "../../sender/response_sender.js";

export function getCustomerCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createCustomer(request, response) {
    customerValidator.validateCustomer(request.body)
        .then((customer) => {
            customerService.createCustomer(customer)
                .then((customer) => {
                    responseSender.returnCreatedResponse(customer, response);
                })
                .catch((error) => {
                    throw error;
                });
        })
        .catch((error) => {
            throw error;
        });
}

export function getCustomerEditFormById(request, response) {
    response.send("This URL is under construction");
}

export function updateCustomerById(request, response) {
    response.send("This URL is under construction");
}

export function removeAllCustomers(request, response) {
    customerService.removeAllCustomers()
        .then((rows) => {
            responseSender.returnDeletedResponse(rows, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function removeCustomerById(request, response) {
    response.send("This URL is under construction");
}

export function getAllCustomers(request, response) {
    customerService.getAllCustomers()
        .then((customers) => {
            responseSender.returnGotResponse(customers, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getCustomerById(request, response) {
    customerService.getCustomerById(request.params.id)
        .then((customer) => {
            responseSender.returnGotResponse(customer, response);
        })
        .catch((error) => {
            throw error;
        });
}
