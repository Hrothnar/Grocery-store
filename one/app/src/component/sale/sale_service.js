import axios from "axios";

export function getSaleCreateForm() {

}

export function createSale(customerId, productId) {
    return axios.get(`http://127.0.0.1:3333/sale/buy/${customerId}/${productId}`)
        .then((sale) => {
            return sale.data;
        })
        .catch((error) => {
            throw error;
        })
}

export function getSaleEditFormById(id) {

}

export function updateSaleById(sale, id) {

}

export function removeAllSales() {
    return axios.delete("http://127.0.0.1:3333/sale")
        .then((rows) => {
            return rows.data;
        })
        .catch((error) => {
            throw error;
        })

}

export function removeSaleById(id) {

}

export function getAllSales() {
    return axios.get("http://127.0.0.1:3333/sale")
        .then((sales) => {
            return sales.data;
        })
        .catch((error) => {
            throw error;
        })

}

export function getSaleById(id) {
    return axios.get(`http://127.0.0.1:3333/sale/${id}`)
        .then((sale) => {
            return sale.data;
        })
        .catch((error) => {
            throw error;
        })
}
