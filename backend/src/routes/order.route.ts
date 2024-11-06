import { Router } from "express";
import { createOrder } from "../controllers/order.controller";
import { authentication } from "../middlewares/authentication";

const router = Router();
router.route("/add").post(authentication, createOrder);
router.route("/add").post(authentication, createOrder);
export default router;
