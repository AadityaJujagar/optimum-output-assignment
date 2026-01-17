// phase 2.4.1: product routes

import { Router } from "express";
import * as productController from "./product.controller.js";

const router = Router();

router.get("/", productController.getProducts);
router.post("/", productController.createProduct);

export default router;
