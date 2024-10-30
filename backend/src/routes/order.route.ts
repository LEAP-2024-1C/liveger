import { Router } from "express";
import { createOrder } from "../controllers/order.controller";

const router = Router();
router.route("/add").post(createOrder);
export default router;
