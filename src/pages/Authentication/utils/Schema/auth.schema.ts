import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  name: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is requred"),
});

const SignInSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
});

export { SignInSchema, SignUpSchema };
