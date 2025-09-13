import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Image,
  Flex,
  Spinner,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { ResetPasswordSchema } from "../schema/auth.schema";
import { ResetPasswordApi } from "../../../api-endpoints/auth/auth.api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResetPasswordValues } from "../../../types/auth/authInterface";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputError } from "../../../components";
import { SlideTemplate } from "src/pages/OnboardingSlides/SlideTemplate";
// import { OnboardingSlides } from "../..";
import logo from "../../../assets/SplashScreenImg/SplashLogo.png";
import { slides } from "../../Onboarding/utils/SlideData";
import { useState } from "react";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const resetSlide = slides[2];

  const { mutate, isLoading } = useMutation(ResetPasswordApi, {
    onSuccess: (data) => {
      toast.success(data?.message || "Password reset successfully");
      navigate("/sign-in");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
  const handleOnSubmit = (values: Omit<ResetPasswordValues, "email">) => {
    const email = localStorage.getItem("resetEmail");
    console.log(values);

    if (!email) {
      toast.error("Email not found. Please start password reset again.");
      return;
    }

    const payload: ResetPasswordValues = {
      email,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };

    mutate(payload);
  };

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: ResetPasswordSchema,
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

      <Flex height={{ base: "100dvh", lg: "100%" }}>
        <VStack
          width={{ lg: "50%", base: "0%" }}
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
          <SlideTemplate {...resetSlide} />
          {/* <OnboardingSlides slides={slides} /> */}
        </VStack>

        <Box w={{ base: "100%", lg: "50%" }} bg="#fafafa" py="2rem" px="1rem">
          <VStack width={{ md: "100%", lg: "70%" }} margin="auto">
            <Box width="100%">
              <Text
                color="secondary.50"
                fontSize={{ lg: "1rem", base: "1.5rem" }}
              ></Text>
              <Text
                fontSize={{ lg: "1.5rem", base: "1.5rem" }}
                fontFamily="primary"
                color="black.50"
              >
                Reset Password
              </Text>
            </Box>

            <Box
              as="form"
              width="100%"
              py="2rem"
              onSubmit={formik.handleSubmit}
            >
              <FormControl mb="1.5rem">
                <FormLabel fontSize="sm" color="black.40">
                  New Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    fontSize="sm"
                    padding="1.6rem 1rem"
                    bg="#fff"
                    borderColor="#ddd"
                    placeholder="Enter new password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
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
                {formik.touched.newPassword && formik.errors.newPassword ? (
                  <InputError error={formik.errors.newPassword} />
                ) : null}
              </FormControl>

              <FormControl mb="1.5rem">
                <FormLabel fontSize="sm" color="black.40">
                  Confirm Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    fontSize="sm"
                    padding="1.6rem 1rem"
                    bg="#fff"
                    borderColor="#ddd"
                    placeholder="Re-enter new password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  <InputRightElement h="100%" pr="1rem">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <InputError error={formik.errors.confirmPassword} />
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
    </>
  );
}
