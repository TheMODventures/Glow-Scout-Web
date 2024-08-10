import * as Yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters."),
  email: Yup.string().email("Invalid email address."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .matches(
      passwordRegex,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
    ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .matches(
      passwordRegex,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
    ),
});

export const ForgotSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address."),
});
