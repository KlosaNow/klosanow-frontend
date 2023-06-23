import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { useFormik } from "formik";

import PhoneInput from 'react-phone-input-2'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore 
const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput

import "react-phone-input-2/lib/style.css";
import { SignInSchema } from "./ValidationSchema";

export default function SignIn() {


  const handleOnSubmit = (values: object, actions: any) => {
    console.log(values);
    actions.resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues: {
      email: " ",
      phone: "",
    },
    validationSchema: SignInSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <Box py="2rem" px="1rem">
      <Box>
        <Text color="secondary.50" fontSize="2xl">
          Welcome Back
        </Text>
        <Text fontSize="sm" color="black.40">
          Login to your account
        </Text>
      </Box>
      <Box as="form" py="2rem" onSubmit={formik.handleSubmit}>
        <FormControl mb="1.5rem">
          <FormLabel fontSize="sm" color="black.40">
            Email
          </FormLabel>
          <Input
            type="text"
            name="email"
            id="email"
            fontSize="sm"
            placeholder="Enter your Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text as="span" mb="1rem" color="secondary.50">
              {formik.errors.email}
            </Text>
          ) : null}
        </FormControl>

        <FormControl mb="1.5rem">
          <FormLabel fontSize="sm" color="black.40">
            Phone Number{" "}
          </FormLabel>
          <MyPhoneInput
            country={"ng"}
            // regions={["africa"]}
            containerClass={"10px"}
            inputStyle={{
              width: "100%",
              height: "2.5rem",
              outline: "2px solid transparent",
            }}
            value={formik.values.phone}
            onChange={(e: () => void) => formik.setFieldValue("phone", e)}
            onBlur={formik.handleBlur("phone")}
          />
          {formik.touched && formik.errors.phone ? (
            <Text as="span" mb="1rem" color="secondary.50">
              {formik.errors.phone}
            </Text>
          ) : null}
        </FormControl>

        <Box display="flex" justifyContent="center">
          <RouteLink to="/home">
            <Button
              width="100%"
              p="1.5rem"
              color="neutral.50"
              bgColor="primary.50"
              type="submit"
              disabled={!(formik.dirty && formik.isValid)}
            >
              Sign In
            </Button>
          </RouteLink>
        </Box>
        <Box mt="1rem">
          <Text textAlign="center">
            Don’t have an account?{" "}
            <Link as={RouteLink} to="/sign-up" color="primary.50">
              Sign up
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
