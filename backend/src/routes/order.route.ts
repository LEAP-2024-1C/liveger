import { Router } from "express";
import { createOrderRequest } from "../controllers/order.controller";
import { authentication } from "../middlewares/authentication";

const router = Router();
router.route("/add").post(authentication, createOrderRequest);
// router.route("/add").post(authentication, createOrder);
export default router;
