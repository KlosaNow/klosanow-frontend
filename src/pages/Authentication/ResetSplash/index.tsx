import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../../../assets/logo.png";
import email from "../../../assets/images/email-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export default function ResetSplash(): JSX.Element {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();
  return (
    <Box bg="gray.50" minH="100vh">
      <Flex p={4} justify={isMobile ? "center" : "flex-start"}>
        <Image src={logo} width={isMobile ? "40%" : "10%"} />
      </Flex>

      <Flex
        direction="column"
        justifySelf="center"
        alignSelf="center"
        justify="center"
        align="center"
      >
        <Flex justify="center" mt="10vh">
          <Image src={email} width="40%" />
        </Flex>

        <Flex
          direction="column"
          align="center"
          p={2}
          px={isMobile ? "8" : "2"}
          textAlign="center"
        >
          <Text fontWeight="700" fontSize="lg" mb={4}>
            Check your email
          </Text>
          <Text mb={4}>
            We've sent you an email with instructions to reset your password.
            Check your inbox and follow the steps there
          </Text>
          <Text fontSize="md">
            if you didn't request a password change or would like to log in to a
            different account,select "Return to login"
          </Text>
        </Flex>

        <Flex
          mt={4}
          gap={2}
          w="80%"
          direction={isMobile ? "column" : "row-reverse"}
        >
          <Button
            size={"lg"}
            w="full"
            color="neutral.50"
            bgColor="primary.50"
            onClick={() => navigate("/sign-in")}
          >
            Return to login
          </Button>
        </Flex>
      </Flex>
      <Text></Text>
    </Box>
  );
}
