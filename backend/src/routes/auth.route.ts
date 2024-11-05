import { Router } from "express";
import {
  getAllUser,
  login,
  signup,
  updateHost,
} from "../controllers/auth.controller";
import { currentUser } from "../controllers/user.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorize";
const router = Router();
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/currentuser").get(authentication, currentUser);
router.route("/host/update-info").put(authentication, authorize, updateHost);
router.route("/all").get(getAllUser);

export default router;
