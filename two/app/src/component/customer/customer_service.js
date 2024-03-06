import { Customer } from "./customer.js";
import { Product } from "../product/product.js";
import { Sale } from "../sale/sale.js";

export function getCustomerCreateForm() {

}

export function createCustomer(customer) {
    return Customer.create(customer)
        .then((customer) => {
            return customer;
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
    return Customer.destroy({ where: {} })
        .then((rows) => {
            return rows;
        })
        .catch((error) => {
            throw error;
        });
}

export function removeCustomerById(id) {

}

export function getAllCustomers() {
    const include = {
        model: Sale,
        through: "sale_customer",
        include: {
            model: Product,
            through: "sale_product",
        }
    };

    return Customer.findAll({ include: include })
        .then((customers) => {
            return customers;
        })
        .catch((error) => {
            throw error;
        });
}

export function getCustomerById(id) {
    const include = {
        model: Sale,
        through: "sale_customer",
        include: {
            model: Product,
            through: "sale_product",
        }
    };

    return Customer.findOne({ include: include, where: { id: id } })
        .then((customer) => {
            return customer;
        })
        .catch((error) => {
            throw error;
        });
}