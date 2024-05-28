import express from "express";
import { getUpload, postUplod } from "../controllers/videoController";
import { videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.route("/upload")
    .get(getUpload)
    .post(videoUpload.single('video') ,postUplod)

export default videoRouter