import { Router } from "express";
import {
  createPlace,
  getPlace,
  getPlacebyHostIdandPlaceId,
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
router
  .route("/host/:id")
  .get(authentication, authorize, getPlacebyHostIdandPlaceId);
export default router;
