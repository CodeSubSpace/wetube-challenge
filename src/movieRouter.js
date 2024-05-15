import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id(\\d{5})", movieDetail);
movieRouter.post("/", filterMovie);

export default movieRouter;