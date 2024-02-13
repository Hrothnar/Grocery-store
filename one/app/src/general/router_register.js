import { chocolateBarRouter } from "../component/chocolate_bar/chocolate_bar_router.js";
import { lampRouter } from "../component/lamp/lamp_router.js";
import { toyCarRouter } from "../component/toy_car/toy_car_router.js";
import { tagRouter } from "../component/tag/tag_router.js";
import { mainRouter } from "../component/other/main/main_router.js";

export function registerAppRouters(app) {
    chocolateBarRouter(app);
    lampRouter(app);
    toyCarRouter(app);
    tagRouter(app);
    mainRouter(app);
};
