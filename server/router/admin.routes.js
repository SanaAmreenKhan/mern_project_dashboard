import { Router } from "express";
import {
  deleteContactsById,
  deleteUserById,
  getAllContacts,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/admin.controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import { adminMiddleware } from "../middlewares/admin-middleware.js";

const router = Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);
router
  .route("/users/edit/:id")
  .patch(authMiddleware, adminMiddleware, updateUserById);

router.route("/contacts").get(authMiddleware, getAllContacts);
router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteContactsById);

export const adminRoutes = router;
