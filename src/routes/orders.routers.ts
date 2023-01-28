import { Router } from "express";
import { getOrders } from "../controllers/orders.controller.js";
export const ordersRoute = Router();

ordersRoute.get("/orders", getOrders);

