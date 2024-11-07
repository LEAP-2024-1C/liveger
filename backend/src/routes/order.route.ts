import { Router } from "express";
import { createOrderRequest, getOrder } from "../controllers/order.controller";
import { authentication } from "../middlewares/authentication";

const router = Router();
router.route("/add").post(authentication, createOrderRequest);
router.route("/:placeId/get-order").get(authentication, getOrder);
export default router;
