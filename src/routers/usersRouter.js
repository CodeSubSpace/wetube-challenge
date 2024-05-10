import express from "express";
import { userEdit, userId, users } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/", users);
usersRouter.get("/:id([0-9a-f]+)", userId);
usersRouter.get("/edit-profile", userEdit);

export default usersRouter;