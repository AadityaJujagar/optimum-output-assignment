// phase 2.3: https product controller logic

import { Request, Response } from "express";
import * as productService from "./product.service.js";

export const getProducts = async (_req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);

  if (!req.body.imageUrl?.startsWith("http")) {
    return res.status(400).json({ message: "Invalid image URL" });
  }

  res.status(201).json(product);
};
