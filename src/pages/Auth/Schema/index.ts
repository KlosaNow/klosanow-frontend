import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

const SignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

export { SignInSchema, SignUpSchema };
