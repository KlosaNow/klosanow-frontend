import { forgotPasswordApi } from "../../../api-endpoints/auth/auth.api";
import { forgotValues } from "../../../types/auth/authInterface";
import {
  Button,
  Spinner,
  FormControl,
  Input,
  FormLabel,
  Flex,
  Image,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import logo from "../../../assets/SplashScreenImg/SplashLogo.png";
import { slides } from "../../Onboarding/utils/SlideData";
import { OnboardingSlides } from "../..";
import { ForgetPasswordSchema } from "../schema/auth.schema";
import { InputError } from "../../../components";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(forgotPasswordApi, {
    onSuccess: (data) => {
      toast.success(
        data?.message ||
          "Email verified. Password reset link has been sent to your email"
      );
      localStorage.setItem("resetEmail", formik.values.email);
      navigate("/reset-verify");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  const handleOnSubmit = (values: forgotValues) => {
    mutate(values);
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: ForgetPasswordSchema,
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
                fontSize={{ lg: "2.1rem", base: "1.5rem" }}
              >
                Let's get you into your account
              </Text>
              <Text
                fontSize={{ lg: "1rem", base: "1rem" }}
                fontFamily={{ lg: "primary" }}
                fontWeight="200"
                color="black.40"
              >
                Enter your email to receive your account
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
                    "Continue"
                  )}
                </Button>
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
