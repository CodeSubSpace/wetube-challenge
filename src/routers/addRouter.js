import express from "express";
import { getAdd, postAdd } from "../controllers/movieController";

const addRouter = express.Router();
addRouter
    .route("/")
    .get(getAdd)
    .post(postAdd);

export default addRouter 
