import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "./ValidationSchema";
import PhoneInput from "react-phone-input-2";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore 
const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput

import "react-phone-input-2/lib/style.css";

export default function SignUp() {
  const handleOnSubmit = (values: object, actions: any) => {
    console.log(values);
    actions.resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues: {
      username: " ",
      email: " ",
      phone: " ",
    },
    validationSchema: SignUpSchema,
    onSubmit: handleOnSubmit,
  });
  return (
    <Box py="2rem" px="1rem">
      <Box>
        <Text color="secondary.50" fontSize="2xl">
          Welcome to easy learning
        </Text>
        <Text fontSize="sm" color="black.40">
          Let’s get you signed up
        </Text>
      </Box>
      <Box as="form" py="2rem" onSubmit={formik.handleSubmit}>
        <FormControl mb="1.5rem">
          <FormLabel fontSize="sm" color="black.40">
            Username
          </FormLabel>
          <Input
            type="text"
            name="username"
            id="username"
            fontSize="sm"
            placeholder="Enter Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <Text as="span" mb="1rem" color="secondary.50">
              {formik.errors.username}
            </Text>
          ) : null}
        </FormControl>

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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
            regions={["africa"]}
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
          <Button
            width="100%"
            p="1.5rem"
            color="neutral.50"
            bgColor="primary.50"
            type="submit"
            disabled={!(formik.dirty && formik.isValid)}
          >
            Sign up
          </Button>
        </Box>
        <Box mt="1rem">
          <Text textAlign="center">
            Already have an account?{" "}
            <Link as={RouteLink} to="/sign-in" color="primary.50">
              Sign in
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
