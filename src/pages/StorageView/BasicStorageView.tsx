import {
  Box,
  Heading,
  Flex,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

export default function StorageView(): JSX.Element {
  return (
    <Box bg="white" p="4" fontWeight="500">
      {/* Navigation Section */}
      <Flex alignItems="center" px="4" py="2">
        <Icon as={AiOutlineArrowLeft} fontSize="2xl" mr="2" />
        <Text fontWeight="medium" style={{ fontWeight: "black" }}>
          Storage
        </Text>
      </Flex>

      <Heading textAlign="center" fontSize="30px" color="#D9927B" mt="5">
        Basic
      </Heading>

      {/* Chart, Storage% and upgrade plan box */}
      <Box
        w={{ base: "90%", lg: "40%" }}
        h={{ base: "400px", lg: "fit" }}
        borderRadius="md"
        bg="white"
        boxShadow="lg"
        p="4"
        mt="10"
        mx="auto"
      >
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="40px"
        >
          <Box>
            <CircularProgress
              value={5}
              color="#7B58F4"
              thickness="5px"
              size="200px"
            >
              <CircularProgressLabel>5%</CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Flex
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            gap="40px"
          >
            <Flex flexDirection="column">
              <Text fontWeight="bold">Space used</Text>
              <Flex>
                <Icon
                  as={AiOutlineArrowLeft}
                  fontSize="2xl"
                  mr="2"
                  textColor="#D9927B"
                />
                <p>3.5MB</p>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Text fontWeight="bold">Total Space</Text>
              <Flex justifyContent="center">
                <Icon
                  as={GoPrimitiveDot}
                  fontSize="2xl"
                  mr="2"
                  textColor="#7B58F4"
                />
                <p>5GB</p>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Text fontWeight="bold" textAlign="center" mt="30px" fontFamily="20px">
          {" "}
          Upgrade for more space
        </Text>
      </Box>
      <Box
        bg="#7B58F4"
        w={{ base: "90%", lg: "20%" }}
        mx="auto"
        marginTop="10"
        borderRadius="md"
        p="5"
        textColor="white"
        textAlign="center"
      >
        Change Plan
      </Box>
    </Box>
  );
}
