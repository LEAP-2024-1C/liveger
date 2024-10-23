import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;

const app = express(); //express function ajillaad app gdg object uusgej bn
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`сервер ${PORT} дээр ажиллаж байна.`);
});
