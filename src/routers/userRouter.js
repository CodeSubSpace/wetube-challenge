import express from "express";
import { getJoin, getLogin, getLogout, home, postJoin, postLogin, postUpload } from "../controllers/userController";
import { txtUpload } from "../middlewares";

const userRouter = express.Router();

// userRouter.get("/", home)
userRouter.route("/")
    .get(home)
    .post(txtUpload.single("textFile"), postUpload);

// userRouter.route("/join")
//     .get(getJoin)
//     .post(postJoin)

// userRouter.route("/login")
//     .get(getLogin)
//     .post(postLogin)

// userRouter.route("/logout")
//     .get(getLogout);

export default userRouter;
