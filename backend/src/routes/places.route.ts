import { Router } from "express";
import { createPlace, getPlaces } from "../controllers/place.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorize";
const router = Router();
router.route("/add").post(authentication, authorize, createPlace);
router.route("/").get(getPlaces);
export default router;
