import { signInApi } from "../../../api-endpoints/auth/auth.api";
import { useMutation } from "@tanstack/react-query";
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
} from "@chakra-ui/react";
import logo from "../../../assets/SplashScreenImg/SplashLogo.png";
import { slides } from "../../Onboarding/utils/SlideData";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { OnboardingSlides } from "../..";
import { SignInSchema } from "../utils";
import { InputError, ToastAlert } from "../../../components";
import toast from "react-hot-toast";

import PhoneInput from "react-phone-input-2";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;
import "react-phone-input-2/lib/style.css";


interface SignInValues {
  email: string;
  phoneNumber: string;
}

export default function SignIn() {
  const navigate = useNavigate();


  const { mutate, isLoading } = useMutation(signInApi, {
    onSuccess: data => {
      toast.success(data?.message)
      navigate("/otp");

    },
    onError: error => {
      toast.error(error?.message)
    }
  })

  const handleOnSubmit = (values: SignInValues) => {
    // @ts-ignore
    localStorage.setItem("email", values?.email);
    mutate(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
    },
    validationSchema: SignInSchema,
    onSubmit: handleOnSubmit,
  });

  // useEffect(() => {
  //   const otpData = data?.data;

  //   if (data?.message !== undefined) {
  //     toast({
  //       position: "top-right",
  //       isClosable: true,
  //       duration: 5000,
  //       render: () => (
  //         <ToastAlert
  //           variant="success"
  //           closeFunc={() => {
  //             toast.closeAll();
  //           }}
  //           message="Login successful. Verify OTP"
  //         />
  //       ),
  //     });
  //   }

  //   if (otpData?.otp !== undefined) {
  //     localStorage.setItem("authResponse", JSON.stringify(otpData));
  //     navigate("/otp");
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (isError === true && error?.message !== undefined) {
  //     toast({
  //       position: "top-right",
  //       isClosable: true,
  //       duration: 5000,
  //       render: () => (
  //         <ToastAlert
  //           variant="warning"
  //           closeFunc={() => {
  //             toast.closeAll();
  //           }}
  //           message={error?.message}
  //         />
  //       ),
  //     });
  //   }
  // }, [isError]);

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
                  Phone Number{" "}
                </FormLabel>
                <MyPhoneInput
                  country={"ng"}
                  enableAreaCodeStretch
                  regions={["africa"]}
                  containerStyle={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row-reverse",
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "2.5rem",
                    outline: "transparent solid 2px",
                    padding: "1.6rem 1rem",
                    borderColor: "#ddd",
                  }}
                  buttonStyle={{
                    position: "static",
                    height: "100%",
                    padding: "1.6rem",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    borderColor: "#ddd",
                  }}
                  value={formik.values.phoneNumber}
                  onChange={(e: () => void) =>
                    formik.setFieldValue("phoneNumber", e)
                  }
                  onBlur={formik.handleBlur("phoneNumber")}
                />
                {formik.touched && formik.errors.phoneNumber ? (
                  <InputError error={formik.errors.phoneNumber} />
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
                  {isLoading ? <Spinner size="sm" /> : "Sign In"}
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
