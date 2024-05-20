import express from "express";
import { movieHome } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.use("/", movieHome);

export default movieRouter;
