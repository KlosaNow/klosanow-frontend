import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  firstName: yup.string().required("FirstName is required"),
  lastName: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Password must match")
    .required("Confirm password is required"),
  phoneNumber: yup.string().required("Phone Number is requred"),
});

const SignInSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const ResetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), ""], "Password must match")
    .required("Confirm password is required"),
});
const ForgetPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

export {
  SignInSchema,
  SignUpSchema,
  ForgetPasswordSchema,
  ResetPasswordSchema,
};
