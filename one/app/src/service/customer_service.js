import axios from "axios";

const host = process.env.BACKEND_CONTAINER_NAME_TWO;
const port = process.env.APP_PORT_TWO;

export function getCustomerCreateForm() {

}

export function createCustomer(customer) {
    return axios.post(`http://${host}:${port}/customer/create`, customer)
        .then((customer) => {
            return customer.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function getCustomerEditFormById(id) {

}

export function updateCustomerById(customer, id) {

}

export function removeAllCustomers() {
    return axios.delete(`http://${host}:${port}/customer`)
        .then((rows) => {
            return rows.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeCustomerById(id) {

}

export function getAllCustomers() {
    return axios.get(`http://${host}:${port}/customer`)
        .then((customers) => {
            return customers.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function getCustomerById(id) {
    return axios.get(`http://${host}:${port}/customer/${id}`)
        .then((customer) => {
            return customer.data;
        })
        .catch((error) => {
            throw error;
        });
}
