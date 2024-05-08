import express from "express";
import { securityLogger, timeLogger, urlLogger } from "./middelwares";
import { protectRouter } from "./routers/protectRouter";
import { globalRouter } from "./routers/globalRouter";

const PORT = 4000;
const app = express();

// app.use("/", globalRouter);
app.use(
    urlLogger,
    timeLogger,
    securityLogger,
)

app.use("/protected", protectRouter);

const handleListening = () => {
    console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
}
app.listen(PORT, handleListening);