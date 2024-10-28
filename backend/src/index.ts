import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database";
import { logger } from "./middlewares/logger";
import serviceRouter from "./routes/service.route";

dotenv.config();
const PORT = process.env.PORT;
const mongoUrl = process.env.URL || "";

const app = express(); //express function ajillaad app gdg object uusgej bn
app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/api/v1/service", serviceRouter);

connectDatabase(mongoUrl);
app.listen(PORT, () => {
  console.log(`сервер ${PORT} дээр ажиллаж байна.`);
});
