// phase 2.2: product service, DB logic

import prisma from "../../config/db.js";
import { CreateProductInput } from "./product.types.js";

export const getAllProducts = async () => {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const createProduct = async (data: CreateProductInput) => {
  return prisma.product.create({
    data,
  });
};
