import { Router } from "express";
import { contactForm } from "../controllers/contact.controller.js";
import { contactFormSchema } from "../validators/contact.validators.js";
import { validate } from "../middlewares/validate-middleware.js";

const router = Router();

router.route("/contact").post(validate(contactFormSchema), contactForm);

export const contactRoutes = router;
