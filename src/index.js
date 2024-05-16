import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./routers/movieRouter";
import addRouter from "./routers/addRouter";
import { localsMiddleware } from "./middlewares/middlewares";


const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use(localsMiddleware);

//routers
app.use("/", movieRouter);
app.use("/add", addRouter);

const listenHandler = (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}`)
}
app.listen(PORT, listenHandler)
