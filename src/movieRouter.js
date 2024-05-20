import express from "express";
import { deleteMovie, getEdit, getUpload, movieDetail, movieHome, postEdit, postUpload } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", movieHome);
movieRouter.route("/upload")
    .get(getUpload)
    .post(postUpload)
movieRouter.route("/:id([0-9a-f]{24})")
    .get(movieDetail)
movieRouter.route("/:id([0-9a-f]{24})/edit")
    .get(getEdit)
    .post(postEdit)
movieRouter.route("/:id([0-9a-f]{24})/delete")
    .get(deleteMovie)

export default movieRouter;
