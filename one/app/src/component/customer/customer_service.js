import axios from "axios";

export function getCustomerCreateForm() {

}

export function createCustomer(customer) {
    return axios.post("http://127.0.0.1:3333/customer/create", customer)
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
    return axios.delete("http://127.0.0.1:3333/customer")
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
    return axios.get("http://127.0.0.1:3333/customer")
        .then((customers) => {
            return customers.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function getCustomerById(id) {
    return axios.get(`http://127.0.0.1:3333/customer/${id}`)
        .then((customer) => {
            return customer.data;
        })
        .catch((error) => {
            throw error;
        });
}
