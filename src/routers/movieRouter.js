import express from "express";
import { home, movieDetail, filterMovie } from "../controllers/movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.post("/", filterMovie);

export default movieRouter;