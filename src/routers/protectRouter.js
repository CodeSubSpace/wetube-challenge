import express from "express";
import { protector } from "../middelwares";


export const protectRouter = express.Router();
protectRouter.get("/", protector);