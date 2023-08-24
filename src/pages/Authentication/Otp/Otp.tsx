import {
  Box,
  HStack,
  PinInput,
  PinInputField,
  Text,
  Button,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";

import logo from "../../../assets/SplashScreenImg/SplashLogo.png";
import { slides } from "../../SlideData";
import { OnboardingSlides } from "../../";
import { useEffect, useState } from "react";
import useVerifyOtp from "../../../hooks/auth-hooks/useVerifyOtp";
import { useNavigate } from "react-router-dom";
export default function Otp(): JSX.Element {

  const [pin, setPin] = useState("");
  const [phoneNumber] = useState(localStorage.getItem("phoneNumber"));

  const navigate = useNavigate();
  // Handle change event for the PinInputField
  const handlePinChange = (value: any) => {
    setPin(value);
  };
  const { mutate, data } = useVerifyOtp();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    mutate(pin);

    if (data?.otp === pin) {
      navigate('/sign-in');
    } else {
      alert('Invalid OTP');
    }
  };

  useEffect(() => {
    const localStoragePin = localStorage.getItem("otp");
    if (localStoragePin !== undefined || null) {
      // @ts-ignore
      setPin(localStoragePin);
    } 
  }, []);

  
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
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack width={{ base: "100%", lg: "70%" }} margin="auto">
            <Box
              width={{ md: "100%", lg: "70%" }}
              margin="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="2.5rem"
            >
              <Box
                position="absolute"
                bgColor="rgba(123, 88, 244, 0.14)"
                borderRadius="2xl"
                p="2rem"
                width="246px"
                height="246px"
                transform="rotate(-22.92deg)"
              ></Box>
              <Box
                bgColor="primary.50"
                borderRadius="2xl"
                width="246px"
                height="246px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  color="neutral.50"
                  textAlign="center"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  OTP VERIFICATION
                </Text>
              </Box>
            </Box>
            <Box mt="4rem">
              <Text textAlign="center" fontSize="sm" fontWeight="medium">
                OTP has been sent to{" "}
                {phoneNumber ? phoneNumber : "your phone number"}
              </Text>
            </Box>

            <Box as="form" py="2rem" width="100%" onSubmit={handleOnSubmit}>
              <HStack display="flex" justifyContent="center">
                <PinInput size="lg" otp value={pin} onChange={handlePinChange}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>

              <Box display="flex" justifyContent="center" mt="2rem">
                <Button
                  width="100%"
                  p="1.5rem"
                  color="neutral.50"
                  bgColor="primary.50"
                  type="submit"
                >
                  Verify OTP
                </Button>
              </Box>
              <Text
                textAlign="center"
                fontSize="sm"
                color="secondary.50"
                mt="1rem"
              >
                00:30 Resend OTP
              </Text>
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
