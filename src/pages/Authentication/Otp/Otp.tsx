import { useEffect, useState } from "react";
import {
  Box,
  HStack,
  PinInput,
  PinInputField,
  Text,
  Button,
} from "@chakra-ui/react";
import useVerifyOtp from "../../../hooks/auth-hooks/useVerifyOtp";
export default function Otp(): JSX.Element {
  const [pin, setPin] = useState("");
  const [phoneNumber] = useState(localStorage.getItem("phoneNumber"));

  // Handle change event for the PinInputField
  const handlePinChange = (value: any) => {
    setPin(value);
  };
  const { mutate } = useVerifyOtp();
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    mutate(pin);
  };

  useEffect(() => {
    const localStoragePin = localStorage.getItem("otp");
    if (localStoragePin !== undefined || null) {
      // @ts-ignore
      setPin(localStoragePin);
    }
  }, []);
  return (
    <Box py="2rem" px="1rem">
      <Box
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
          OTP has been sent to {phoneNumber ? phoneNumber : "your phone number"}
        </Text>
      </Box>

      <Box as="form" py="2rem" onSubmit={handleOnSubmit}>
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
        <Text textAlign="center" fontSize="sm" color="secondary.50" mt="1rem">
          00:30 Resend OTP
        </Text>
      </Box>
    </Box>
  );
}
