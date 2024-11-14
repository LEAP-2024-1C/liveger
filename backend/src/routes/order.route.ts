import { Router } from "express";
import {
  confirmOrder,
  createOrder,
  getOrder,
} from "../controllers/order.controller";
import { authentication } from "../middlewares/authentication";

const router = Router();
router.route("/").post(authentication, createOrder);
router.route("/:orderId").get(authentication, getOrder);
router.route("/confirm/:_id").put(authentication, confirmOrder);

export default router;
