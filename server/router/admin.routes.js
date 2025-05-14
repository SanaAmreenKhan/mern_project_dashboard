import { Router } from "express";
import { getAllContacts, getAllUsers } from "../controllers/admin.controller.js";

const router = Router();

router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);

export const adminRoutes = router;
