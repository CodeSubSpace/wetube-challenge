import express from "express";
import { getJoin, getLogin, getLogout, home, postJoin, postLogin } from "../controllers/userController";

const userRouter = express.Router();

// Add your magic here!
userRouter.get("/", home)

userRouter.route("/join")
    .get(getJoin)
    .post(postJoin)

userRouter.route("/login")
    .get(getLogin)
    .post(postLogin)

userRouter.route("/logout")
    .get(getLogout);

export default userRouter;
