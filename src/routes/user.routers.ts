import { Router } from "express";
import { deleteUser, getUser, postUser, getUsersWhoBeted } from "../controllers/user.controller.js";
// import { validateUser } from "../middlewares/users.middleware.js";

export const userRoute = Router();

userRoute.get("/users", getUser);

userRoute.get("/users/beted", getUsersWhoBeted);

userRoute.post("/users", postUser);

// userRoute.patch("/users/:id", updateUser);

userRoute.delete("/users/:id", deleteUser);