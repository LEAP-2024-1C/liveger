import { Router } from "express";
import { createPlace, getPlaces } from "../controllers/place.controller";
const router = Router();
router.route("/add").post(createPlace);
router.route("/").get(getPlaces);
export default router;
