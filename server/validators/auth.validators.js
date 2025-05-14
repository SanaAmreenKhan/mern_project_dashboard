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

const phoneSchema = z
  .string({ required_error: "Phone is required" })
  .trim()
  .min(10, { message: "Phone must be at least 10 characters long." })
  .max(20, { message: "Phone must be no more than 20 characters." });

const passwordSchema = z
  .string({ required_error: "Password is required" })
  .min(6, { message: "Password must be at least 6 characters long." })
  .max(200, { message: "Password must be no more than 200 characters." });

//create object schema

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupUserSchema = loginSchema.extend({
  username: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  password: passwordSchema,
});
