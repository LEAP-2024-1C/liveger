import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database";

dotenv.config();
const PORT = process.env.PORT;
const mongoUrl = process.env.URL || "";
const app = express(); //express function ajillaad app gdg object uusgej bn
app.use(express.json());
app.use(cors());

connectDatabase(mongoUrl);
app.listen(PORT, () => {
  console.log(`сервер ${PORT} дээр ажиллаж байна.`);
});
