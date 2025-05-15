import { z } from "zod";

export const loginSchema = z.object({
  emailOrUsername: z
    .string()
    .min(3, "Username or email is required")
    .refine(
      (val) =>
        /^[a-zA-Z0-9]{3,15}$/.test(val) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      {
        message: "Must be a valid username (3–15 chars) or a valid email address",
      }
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(40, "Password cannot exceed 40 characters")
    .nonempty("First name is required"),
  remember: z.boolean().optional(),
});
  
export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .max(20, "First name cannot exceed 20 characters")
      .nonempty("First name is required"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters long")
      .max(20, "Last name cannot exceed 20 characters")
      .nonempty("Last name is required"),

    email: z
      .string()
      .email("Please provide a valid email address")
      .nonempty("Email is required"),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(15, "Username cannot exceed 15 characters")
      .regex(/^[a-zA-Z0-9]*$/, "Username must only contain alphanumeric characters")
      .nonempty("Username is required"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(40, "Password cannot exceed 40 characters")
      .nonempty("Password is required"),

    confirmPassword: z
      .string()
      .nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });