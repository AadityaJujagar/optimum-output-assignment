// phase 3.3: controllers for orders

import { Request, Response } from "express";
import { CreateOrderInput } from "./order.types.js";
import * as orderService from "./order.service.js";

// create order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const body: CreateOrderInput = req.body;
    const order = await orderService.createOrder(body);

    res.status(201).json(order);
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// get order
export const getOrder = async (req: Request, res: Response) => {
  const orderId = parseInt(req.params.id as string, 10);
  const order = await orderService.getOrderById(orderId);

  if (!order)
    return res.status(404).json({
      message: "Order not found",
    });

  res.status(200).json(order);
};
