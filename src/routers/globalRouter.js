import express from 'express';
import { getHome } from '../controllers/basicControllers';

export const globalRouter = express.Router();
globalRouter.get("/", getHome);