import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

export const SignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      passwordRegex,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
    ),
});

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      passwordRegex,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
    ),
});

export const ForgotSchema = z.object({
  email: z.string().email("Invalid email address."),
});

export const OtpSchema = z.object({
  otp: z.string()
    .length(5, "OTP must be exactly 5 digits")
    .regex(/^\d+$/, "OTP must be a number")
});


export const resetSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      passwordRegex,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
    ),
});