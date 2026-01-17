// phase 3.2: DB + transaction logic

import prisma from "../../config/db.js";
import { CreateOrderInput } from "./order.types.js";

export const createOrder = async (data: CreateOrderInput) => {
  return prisma.$transaction(async (tx) => {
    // creation of order
    const order = await tx.order.create({
      data: {},
    });

    // process each item
    for (const item of data.items) {
      const product = await tx.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) throw new Error(`Product ${item.productId} not found`);
      if (product.stock < item.quantity)
        throw new Error(`Insufficient stock for ${product.name}`);

      // decrease the stock
      await tx.product.update({
        where: {
          id: item.productId,
        },
        data: {
          stock: product.stock - item.quantity,
        },
      });

      // add to cart
      await tx.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
        },
      });
    }

    // return order with items
    const orderWithItems = await tx.order.findUnique({
      where: {
        id: order.id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return orderWithItems;
  });
};

// get orders by id
export const getOrderById = async (orderId: number) => {
  return prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};
