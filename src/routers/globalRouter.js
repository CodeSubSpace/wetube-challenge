import express from "express";
import { home, join, login, new_, trending } from "../controllers/globalController";

const globalRouter = express.Router();


globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", new_);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;