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

export default function VerifySplash(): JSX.Element {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const userEmail = localStorage.getItem("email");

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

        <Flex direction="column" align="center" p={2} textAlign="center">
          <Text fontWeight="700" fontSize="lg" mb={4}>
            Verify your email to continue
          </Text>
          <Text mb={4}>
            We just sent an email to the address {userEmail || ""}
          </Text>
          <Text fontSize="sm">
            Please check your email and select the link provided to verify your
            address
          </Text>
        </Flex>

        <Flex
          mt={4}
          gap={2}
          w="80%"
          direction={isMobile ? "column" : "row-reverse"}
        >
          <Button
            as="a"
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            size={"lg"}
            w="full"
            color="neutral.50"
            bgColor="primary.50"
          >
            Go to Gmail Inbox
          </Button>
          <Button
            bg="none"
            size={"lg"}
            w="full"
            border="solid 2px"
            color="primary.50"
            borderColor="primary.50"
          >
            Send again
          </Button>
        </Flex>
      </Flex>
      <Text></Text>
    </Box>
  );
}
