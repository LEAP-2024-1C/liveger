import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database";
import { logger } from "./middlewares/logger";
import serviceRouter from "./routes/service.route";
import authRouter from "./routes/auth.route";
import placeRouter from "./routes/places.route";
import orderRouter from "./routes/order.route";
import { getPlaces } from "./controllers/place.controller";
dotenv.config();
const PORT = process.env.PORT;
const mongoUrl = process.env.URL || "";

const app = express(); //express function ajillaad app gdg object uusgej bn
app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/places", placeRouter);
app.use("/api/v1/order", orderRouter);
// app.use("/", getPlaces);
connectDatabase(mongoUrl);
app.listen(PORT, () => {
  console.log(`сервер ${PORT} дээр ажиллаж байна.`);
});
