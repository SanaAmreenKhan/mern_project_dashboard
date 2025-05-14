import { Router } from "express";
import { services } from "../controllers/service.controller.js";

const router = Router();

router.route("/services").get(services);

export const serviceRoutes = router;
