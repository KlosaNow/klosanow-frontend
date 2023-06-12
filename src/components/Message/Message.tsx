import { FaRobot } from "react-icons/fa";
import { Box, Flex, Text } from "@chakra-ui/react";

interface MessageOwner {
  owner: string;
  text: string;
}

const Message = (props:MessageOwner) => {
  const { owner, text } = props;
  const bot = (owner == "bot");

  return (
    <Box w="80%" className={`${owner}`}>
      <Text p="10px" borderRadius="10px" className="p">{text}</Text>

      <Flex align="center" justify="flex-start" fontSize="12px" fontWeight="400" lineHeight="15px" gap="3px" mt="8px">
        {bot && <>
          <Box p="4px 5px 6px" fontSize="15px" borderRadius="50%" color="neutral.50" bg="primary.50">
            <FaRobot />
          </Box>
          <Text>Klosanow</Text>
          </>
          }

          {
            !bot && <Text>You</Text>
          }
      </Flex>
    </Box>
  )
};

export default Message;
