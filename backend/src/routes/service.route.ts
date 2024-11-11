import { Router } from "express";
import { createService, getServices } from "../controllers/service.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorize";
const router = Router();
router.route("/create").post(authentication, authorize, createService);
router.route("/").get(getServices);
export default router;
