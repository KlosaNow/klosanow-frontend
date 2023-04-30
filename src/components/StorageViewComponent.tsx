import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

interface StorageCardProps {
  title: string;
  progressValue: number;
  spaceUsed: string;
  totalSpace: string;
  message: string;
}

const StorageViewComponent: React.FC<StorageCardProps> = ({
  title,
  progressValue,
  spaceUsed,
  totalSpace,
  message,
}) => {
  return (
    <Box bg="white" p="4" fontWeight="500">
      {/* Navigation Section */}
      <Flex alignItems="center" px="4" py="2">
        <Icon as={AiOutlineArrowLeft} fontSize="2xl" mr="2" />
        <Text fontWeight="medium" style={{ fontWeight: "black" }}>
          Storage
        </Text>
      </Flex>

      <Text textAlign="center" fontSize="30px" color="secondary.50">
        {title}
      </Text>

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
              value={progressValue}
              color="primary.50"
              thickness="5px"
              size="200px"
            >
              <CircularProgressLabel>{progressValue}%</CircularProgressLabel>
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
                  as={GoPrimitiveDot}
                  fontSize="2xl"
                  mr="2"
                  textColor="secondary.50"
                />
                <p>{spaceUsed}</p>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Text fontWeight="bold">Total Space</Text>
              <Flex justifyContent="center">
                <Icon
                  as={GoPrimitiveDot}
                  fontSize="2xl"
                  mr="2"
                  textColor="primary.50"
                />
                <p>{totalSpace}</p>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Text fontWeight="bold" textAlign="center" mt="30px" fontFamily="20px">
          {" "}
          {message}
        </Text>
      </Box>
      <Box
        bg="#7B58F4"
        w={{ base: "90%", lg: "20%" }}
        mx="auto"
        marginTop="6"
        borderRadius="md"
        p="5"
        textColor="white"
        textAlign="center"
      >
        Change Plan
      </Box>
    </Box>
  );
};

export default StorageViewComponent;
