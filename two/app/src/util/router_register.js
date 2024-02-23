import { registerProductRouters } from "../component/product/product_router.js";
import { registerSaleRouters } from "../component/sale/sale_router.js";
import { registerCustomerRouters } from "../component/customer/customer_router.js";

export function registerAppRouters(app) {
    registerProductRouters(app);
    registerSaleRouters(app);
    registerCustomerRouters(app);
}
