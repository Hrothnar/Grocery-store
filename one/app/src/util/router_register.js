import { registerChocolateBarRouters } from "../component/chocolate_bar/chocolate_bar_router.js";
import { registerLampRouters } from "../component/lamp/lamp_router.js";
import { registerToyCarRouters } from "../component/toy_car/toy_car_router.js";
import { registerTagRouters } from "../component/tag/tag_router.js";
import { registerMainRouters } from "../component/other/main/main_router.js";
import { registerProductRouters } from "../component/product/product_router.js";
import { registerSaleRouters } from "../component/sale/sale_router.js";
import { registerCustomerRouters } from "../component/customer/customer_router.js";

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
