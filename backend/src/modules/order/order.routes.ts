// phase 3.4.1: routes for orders

import { Router } from "express";
import * as orderController from "./order.controller.js";

const router = Router();

router.post("/", orderController.createOrder);
router.get("/:id", orderController.getOrder);

export default router;
