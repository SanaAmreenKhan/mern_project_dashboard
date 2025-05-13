import { Router } from "express";
import {
  homePage,
  registerPage,
  login,
  userProfile,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate-middleware.js";
import {
  loginSchema,
  signupUserSchema,
} from "../validators/auth.validators.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = Router();

router.route("/").get(homePage);
router.route("/register").post(validate(signupUserSchema), registerPage);
router.route("/login").post(validate(loginSchema), login);
router.route("/user").get(authMiddleware, userProfile);

export const authRoutes = router;
