import { Router } from "express";
import {
  forgetPassword,
  getAllUser,
  login,
  signup,
  //   updateHost,
  verifyPassword,
} from "../controllers/auth.controller";
import { currentUser } from "../controllers/user.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorize";
const router = Router();
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/currentuser").get(authentication, currentUser);
// router.route("/host/update-info").put(authentication, authorize, updateHost);
router.route("/all").get(getAllUser);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password").post(verifyPassword);

export default router;
