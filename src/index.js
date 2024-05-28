import "./db";
import "./models/User";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";
import morgan from "morgan";


const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: "Hello!",
        resave: true,
        saveUninitialized: true
    })
);
app.use(express.json());
app.use(localsMiddleware);

app.use("/", userRouter);
// app.use("/video", videoRouter);

const listenHandler = (req, res) => {
    console.log(`✅ Server listening on http://localhost:${PORT} 🚀`)
}
app.listen(PORT, listenHandler)