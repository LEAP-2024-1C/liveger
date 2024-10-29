import { Router } from "express";
import { createCalendar } from "../controllers/calendar.controller";
import { authorize } from "../middlewares/authorize";
import { authentication } from "../middlewares/authentication";

const router = Router();
router.route("/add").post(authentication, authorize, createCalendar);
export default router;
