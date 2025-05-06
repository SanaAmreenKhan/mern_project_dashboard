import { Router } from "express";
import { homePage, registerPage } from "../controllers/auth-controller.js";

const router = Router();

router.route("/").get(homePage);

router.route("/register").get(registerPage);

export const authRoutes = router;
