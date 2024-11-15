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

import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51QFT29IyQbMN863Akx0sPfM6o94PBFXH0UAEbaqy3fFJZvjWcRnWGii4JDDqWq1L5rmSqDVVOvMkpvz3mfka1stC00lVpQsyU9",
  {
    apiVersion: "2024-10-28.acacia",
  }
);

dotenv.config();
const PORT = process.env.PORT;
const mongoUrl = process.env.URL || "";

const app = express(); //express function ajillaad app gdg object uusgej bn
app.use(express.json());
app.use(cors());
app.use(logger());

app.get("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Kuvsgul Live Ger",
            images: [
              "https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          },
          unit_amount: 100 * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancell",
  });
  res.status(200).json({ payment_url: session.url });
});

app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/places", placeRouter);
app.use("/api/v1/order", orderRouter);
app.use("/", getPlaces);

connectDatabase(mongoUrl);
app.listen(PORT, () => {
  console.log(`сервер ${PORT} дээр ажиллаж байна.`);
});
