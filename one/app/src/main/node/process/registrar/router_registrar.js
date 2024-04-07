import { registerChocolateBarRouters } from "../../router/chocolate_bar_router.js";
import { registerLampRouters } from "../../router/lamp_router.js";
import { registerToyCarRouters } from "../../router/toy_car_router.js";
import { registerTagRouters } from "../../router/tag_router.js";
import { registerMainRouters } from "../../router/main_router.js";
import { registerProductRouters } from "../../router/product_router.js";
import { registerSaleRouters } from "../../router/sale_router.js";
import { registerCustomerRouters } from "../../router/customer_router.js";

export function registerAppRouters(app) {
    registerChocolateBarRouters(app);
    registerLampRouters(app);
    registerToyCarRouters(app);
    registerTagRouters(app);
    registerMainRouters(app);
    registerProductRouters(app);
    registerSaleRouters(app);
    registerCustomerRouters(app);
}
