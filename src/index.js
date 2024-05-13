import express from "express";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import usersRouter from "./routers/usersRouter";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");



//routers
app.use("/", globalRouter);
app.use("/story", storyRouter);
app.use("/users", usersRouter);

const listenHandler = (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}`)
}
app.listen(PORT, listenHandler)
