import { Router } from "express";
import { deleteUser, getUser, postUser } from "../controllers/user.controller.js";
// import { validateUser } from "../middlewares/users.middleware.js";

export const userRoute = Router();

userRoute.get("/users", getUser);

userRoute.post("/users", postUser);

userRoute.delete("/users/:id", deleteUser);