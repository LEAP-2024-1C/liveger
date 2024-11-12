import { Router } from "express";
import {
  createPlace,
  getPlace,
  getPlaces,
  getPlacesbyHostId,
} from "../controllers/place.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorize";
const router = Router();
router.route("/add").post(authentication, authorize, createPlace);
router.route("/").get(getPlaces);
router.route("/by-host").get(authentication, authorize, getPlacesbyHostId);
router.route("/:id").get(getPlace);
export default router;
