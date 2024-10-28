import { Router } from "express";
import { createService, getServices } from "../controllers/service.controller";
const router = Router();
router.route("/create").post(createService);
router.route("/").get(getServices);
export default router;
