import { Router } from "express";
import { getSeats, updateSeat } from "../controllers/seats.controller.js";
import validateUpdatingSeat from "../middlewares/seats.middleware.js";
export const seatsRoute = Router();

seatsRoute.get("/seats", getSeats)

seatsRoute.patch("/seats", validateUpdatingSeat, updateSeat);
