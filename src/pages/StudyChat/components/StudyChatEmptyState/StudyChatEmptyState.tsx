import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LockIcon } from "../../assets/svgs";
import { heading2 } from "../../data/styles";

interface StudyChatEmptyStateProps {
  image: string;
  title?: string;
  desc?: string;
}

const StudyChatEmptyState: React.FC<StudyChatEmptyStateProps> = ({
  image,
  desc,
  title,
}) => {
  return (
    <Flex
      h="100%"
      w="100%"
      flexDir="column"
      justifyContent="space-between"
      padding="32px 0 112px"
      alignItems="center"
    >
      <Flex alignItems="center" flexDir="column">
        <Box maxW="400px" w="100%" h="100%" maxH="258px">
          <Image src={image} alt={title} w="100%" h="100%" />
        </Box>

        <Box mt="32px" textAlign="center">
          {title && <Text {...heading2}>{title}</Text>}

          <Text color="#525256" maxW="324px">
            {desc}
          </Text>
        </Box>
      </Flex>

      <Flex gap="8px" alignItems="center" mt="16px">
        <LockIcon />
        <Text color="#525256">End-to-end Encryption</Text>
      </Flex>
    </Flex>
  );
};

export default StudyChatEmptyState;
