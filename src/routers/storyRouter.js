import express from "express";
import { story, storyDelete, storyEdit } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id([0-9a-f]+)", story);
storyRouter.get("/:id([0-9a-f]+)/edit", storyEdit);
storyRouter.get("/:id([0-9a-f]+)/delete", storyDelete);

export default storyRouter;