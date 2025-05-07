import { Router } from "express";
import { homePage, registerPage } from "../controllers/auth-controller.js";

const router = Router();

router.route("/").get(homePage);

router.route("/register").post(registerPage);

export const authRoutes = router;
