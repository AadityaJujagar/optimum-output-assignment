// phase 2.4.2 && phase 3.4.2: register routes globally
import { Router } from "express";
import productRoutes from "./modules/product/product.routes.js";
import orderRoutes from "./modules/order/order.routes.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

export default router;
