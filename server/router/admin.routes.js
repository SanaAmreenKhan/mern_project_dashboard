import { Router } from "express";
import {
  getAllContacts,
  getAllUsers,
} from "../controllers/admin.controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import { adminMiddleware } from "../middlewares/admin-middleware.js";

const router = Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, getAllContacts);

export const adminRoutes = router;
