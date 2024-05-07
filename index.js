import express from "express";

const PORT = "4000";
const app = express();


const globalRouter = express.Router();
const getHome = (req, res) => {
    res.send("Home");
}
globalRouter.get("/", getHome);


const aboutRouter = express.Router()
const getAbout = (req, res) => {
    res.send("About");
}
aboutRouter.get("/", getAbout);


const contactRouter = express.Router()
const getContact = (req, res) => {
    res.send("Contact");
}
contactRouter.get("/", getContact);


const loginRouter = express.Router()
const getLogin = (req, res) => {
    res.send("Login");
}
loginRouter.get("/", getLogin);


app.use("/", globalRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/login", loginRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);