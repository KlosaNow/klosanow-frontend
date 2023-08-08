import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../utils";
import PhoneInput from "react-phone-input-2";
import { OnboardingSlides } from "../../";
import logo from "../../../assets/SplashScreenImg/SplashLogo.png";
import { slides } from "../../SlideData";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;
import "react-phone-input-2/lib/style.css";
import useSignup from "../../../hooks/auth-hooks/useSignup";
import { useEffect } from "react";
import { InputError } from "../../../components";

export default function SignUp() {
  const navigate = useNavigate();
  const { mutate, data } = useSignup();

  const handleOnSubmit = (values: any) => {
    mutate(values);
    localStorage.setItem("phoneNumber", values?.phoneNumber);

    // actions.resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: handleOnSubmit,
  });

  useEffect(() => {
    if (data?.otp !== undefined) {
      localStorage.setItem("otp", data?.otp);

      navigate("/otp");
    }
  }, [data]);
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
          <OnboardingSlides slides={slides} />
        </VStack>
        <Box
          w={{ base: "100%", lg: "50%" }}
          bg={{ base: "#fafafa" }}
          py="2rem"
          px="1rem"
        >
          <VStack width={{ md: "100%", lg: "70%" }} margin="auto">
            <Box width="100%">
              <Text
                color="secondary.50"
                fontSize={{ lg: "1rem", base: "1.5rem" }}
              >
                Welcome to easy learning
              </Text>
              <Text
                fontSize={{ lg: "2.1rem", sm: "1rem" }}
                fontFamily={{ lg: "primary" }}
                color="black.40"
              >
                Let’s get you signed up
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
                  Username
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  fontSize="sm"
                  padding="1.6rem 1rem"
                  bg="#fff"
                  borderColor="#ddd"
                  placeholder="Enter Username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name.trim()}
                />
                {formik.touched.name && formik.errors.name ? (
                  <InputError error={formik.errors.name} />
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
                  padding="1.6rem 1rem"
                  bg="#fff"
                  borderColor="#ddd"
                  placeholder="Enter your Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email.trim()}
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
                  regions={["africa"]}
                  containerClass={"10px"}
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
