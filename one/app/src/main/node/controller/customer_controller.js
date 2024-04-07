import * as customerService from "../service/customer_service.js";
import * as customerValidator from "../validator/customer_validator.js";
import * as responseSender from "../process/sender/response_sender.js";

export function getCustomerCreateForm(request, response) {
    response.send("This URL is under construction");
}

export function createCustomer(request, response) {
    customerValidator.validateCustomer(request.body)
        .then((customer) => {
            customerService.createCustomer(customer)
                .then((customer) => {
                    responseSender.sendCreatedResponse(customer, response);
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
            responseSender.sendDeletedResponse(rows, response);
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
            responseSender.sendGotResponse(customers, response);
        })
        .catch((error) => {
            throw error;
        });
}

export function getCustomerById(request, response) {
    customerService.getCustomerById(request.params.id)
        .then((customer) => {
            responseSender.sendGotResponse(customer, response);
        })
        .catch((error) => {
            throw error;
        });
}
