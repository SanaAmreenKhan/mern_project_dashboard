import { z } from "zod";

const nameSchema = z
  .string({ required_error: "Name is required" })
  .trim()
  .min(3, { message: "Name must be at least 3 characters long." })
  .max(100, { message: "Name must be no more than 100 characters." });

const emailSchema = z
  .string({ required_error: "Email is required" })
  .trim()
  .email({ message: "Please enter a valid email address." })
  .max(200, { message: "Email must be no more than 200 characters." });

const messageSchema = z
  .string({ required_error: "Message is required" })
  .min(15, { message: "Message must be at least 15 characters long." })
  .max(1000, { message: "Message must be no more than 1000 characters." });

//create object schema
export const contactFormSchema = z.object({
  username: nameSchema,
  email: emailSchema,
  message: messageSchema,
});
