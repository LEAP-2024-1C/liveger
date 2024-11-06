import { Router } from "express";
import {
	createPlace,
	getOnePlace,
	getPlaces,
} from "../controllers/place.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorize";
const router = Router();
router.route("/add").post(authentication, authorize, createPlace);
router.route("/").get(getPlaces);
router.route("/:id").get(getOnePlace);
export default router;
