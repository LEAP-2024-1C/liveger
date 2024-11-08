import { Router } from "express";
import { createOrder, getOrder } from "../controllers/order.controller";
import { authentication } from "../middlewares/authentication";

const router = Router();
router.route("/").post(authentication, createOrder);
router.route("/:orderId").get(authentication, getOrder);

export default router;
