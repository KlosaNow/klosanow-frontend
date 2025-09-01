import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { signInApi } from "../../../api-endpoints/auth/auth.api";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { SignInValues } from "../../../types/auth/authInterface";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Button,
  Flex,
  VStack,
  Image,
  Spinner,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import logo from "../../../assets/SplashScreenImg/SplashLogo.png";
import { slides } from "../../Onboarding/utils/SlideData";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { OnboardingSlides } from "../..";
import { SignInSchema } from "../schema/auth.schema";
import { InputError } from "../../../components";
import toast from "react-hot-toast";

// import PhoneInput from "react-phone-input-2";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;
// import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(signInApi, {
    onSuccess: (data) => {
      toast.success(data?.message);
      const otpData = data?.data;
      // set otp to local storage
      // this otp should be sent to user registered phone number
      localStorage.setItem("signinResponse", JSON.stringify(otpData));
      navigate("/dashboard");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(error?.message);
      }
    },
  });

  const handleOnSubmit = (values: SignInValues) => {
    // console.log("The formik values are", values);

    localStorage.setItem("email", values?.email);

    mutate(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <>
      <Box hideBelow="lg">
        <svg
          style={{ position: "absolute", zIndex: "-1" }}
          width="568"
          height="160"
          viewBox="0 0 568 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="-14.5"
            cy="-240.5"
            rx="582.5"
            ry="400.5"
            fill="#E5DEFD"
          />
        </svg>
      </Box>

      <Flex width="100%" height={{ base: "100dvh", lg: "100%" }}>
        <VStack
          width={{ lg: "50%", md: "0%" }}
          hideBelow="lg"
          display="flex"
          py="2rem"
          px="1rem"
        >
          <Box
            style={{ position: "absolute", top: "5%", left: "5%" }}
            width="8rem"
          >
            <Image src={logo} alt="Dan Abramov" />
          </Box>
          <OnboardingSlides slides={slides} />
        </VStack>
        <Box
          w={{ base: "100%", lg: "50%" }}
          bg={{ lg: "#fafafa" }}
          py="2rem"
          px="1rem"
        >
          <VStack width={{ md: "100%", lg: "70%" }} margin="auto">
            <Box width="100%">
              <Text
                color="secondary.50"
                fontSize={{ lg: "1rem", base: "1.5rem" }}
              >
                Welcome Back
              </Text>
              <Text
                fontSize={{ lg: "2.1rem", base: "1rem" }}
                fontFamily={{ lg: "primary" }}
                color="black.40"
              >
                Login To Your Account
              </Text>
            </Box>
            <Box
              as="form"
              py="1rem"
              width="100%"
              onSubmit={formik.handleSubmit}
            >
              <FormControl mb="1.5rem">
                <FormLabel fontSize="sm" color="black.40">
                  Email
                </FormLabel>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  fontSize="sm"
                  padding="1.6rem 1rem"
                  bg="#fff"
                  borderColor={{ base: "#ddd", lg: "#eee" }}
                  border="1px solid"
                  outline="none"
                  placeholder="Enter your Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <InputError error={formik.errors.email} />
                ) : null}
              </FormControl>

              <FormControl mb="1.5rem">
                <FormLabel fontSize="sm" color="black.40">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    fontSize="sm"
                    padding="1.6rem 1rem"
                    bg="#fff"
                    borderColor="#ddd"
                    placeholder="Enter your Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password.trim()}
                  />
                  <InputRightElement h="100%" pr="1rem">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {formik.touched.password && formik.errors.password ? (
                  <InputError error={formik.errors.password} />
                ) : null}
              </FormControl>

              <Box display="flex" justifyContent="flex-end" mb="1rem">
                <Link
                  as={RouteLink}
                  to="/forgot-password"
                  color="primary.50"
                  fontSize="sm"
                  fontWeight="500"
                  _hover={{ textDecoration: "underline" }}
                >
                  Forgot password? Click here
                </Link>
              </Box>

              <Box display="flex" justifyContent="center">
                <Button
                  width="100%"
                  p="1.7rem"
                  fontWeight="300"
                  color="neutral.50"
                  bgColor="primary.50"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  {isLoading ? (
                    <Spinner size="sm" thickness="4px" />
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </Box>

              <Box mt="1rem">
                <Text textAlign="center" fontWeight={500}>
                  Don’t have an account?{" "}
                  <Link as={RouteLink} to="/sign-up" color="primary.50">
                    Sign up
                  </Link>
                </Text>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Flex>

      <Box
        hideBelow="lg"
        style={{
          position: "absolute",
          zIndex: "-2",
          bottom: "0",
          overflow: "hidden",
          width: "50%",
          height: "5rem",
        }}
      >
        <svg
          style={{ position: "absolute", bottom: "-20px" }}
          width="708"
          height="85"
          viewBox="0 0 708 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="353.5" cy="400.5" rx="582.5" ry="400.5" fill="#E5DEFD" />
        </svg>
      </Box>
    </>
  );
}
