import { constructUrl } from "../../util/url_constructor.js";

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
    response.send("This URL is under construction");
}

export function getProductById(request, response) {
    const url = constructUrl(request, process.env.APP_PORT_TWO);
    axios.get(url)
        .then((json) => {
            const data = json.data;
            
            
        })
        .catch((error) => {
            throw error;
        });
}