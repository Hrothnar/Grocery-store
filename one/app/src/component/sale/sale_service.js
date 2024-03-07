import axios from "axios";

export function getSaleCreateForm() {

}

const host = process.env.BACKEND_CONTAINER_NAME_TWO;
const port = process.env.APP_PORT_TWO;

export function createSale(customerId, productId) {
    return axios.get(`http://${host}:${port}/sale/buy/${customerId}/${productId}`)
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
    return axios.delete(`http://${host}:${port}/sale`)
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
    return axios.get(`http://${host}:${port}/sale`)
        .then((sales) => {
            return sales.data;
        })
        .catch((error) => {
            throw error;
        })

}

export function getSaleById(id) {
    return axios.get(`http://${host}:${port}/sale/${id}`)
        .then((sale) => {
            return sale.data;
        })
        .catch((error) => {
            throw error;
        })
}
