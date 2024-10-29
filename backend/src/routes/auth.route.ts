import { Router } from "express";
import { login, signup } from "../controllers/auth.controller";
import { currentUser } from "../controllers/user.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorize";
const router = Router();
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/currentuser").get(authentication, currentUser);

export default router;
