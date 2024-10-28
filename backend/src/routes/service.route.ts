import { Router } from "express";
import { createService } from "../controllers/service.controller";
const router = Router();
router.route("/create").post(createService);
export default router;
