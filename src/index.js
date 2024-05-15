import express from "express";
import movieRouter from "./movieRouter";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", movieRouter);


const listenHandler = (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}`)
}
app.listen(PORT, listenHandler)
