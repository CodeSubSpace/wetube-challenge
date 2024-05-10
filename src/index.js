import express from "express";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import usersRouter from "./routers/usersRouter";

const app = express();
const PORT = 4000;

//Write middlewares (coming soon...)

//routers
app.use("/", globalRouter);
app.use("/story", storyRouter);
app.use("/users", usersRouter);

const listenHandler = (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}`)
}
app.listen(PORT, listenHandler)
