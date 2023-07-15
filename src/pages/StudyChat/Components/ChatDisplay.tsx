import React from "react";
import { Link, Box, Text, Flex, Circle, Avatar} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const ChatDisplay = ({
  chatname,
  lastmsg,
  lastmsg_time,
  unread_messages,
  chatId
}: {
  chatname: string;
  lastmsg: string;
  lastmsg_time: string;
  unread_messages: number;
  chatId: string
}) => {

  
  return (
    <Link 
    as={ReachLink}
    width={"100%"} pos={"relative"} to={`/studychat/${chatId}`}>
      <Box
      pos={"relative"}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom={"0.2px solid #CCC"}
      py={"8px"}
    >
      <Flex justifyContent="space-between" gap="8px">
        <Avatar fontSize="40px" bg="#b1b1b1" />
        <Flex alignItems="Circle" justifyContent="center" flexDir="column">
          <Text
            fontSize={"14px"}
            fontWeight={500}
            color={"#2A2A2A"}
            lineHeight={"17.5px"}
            marginBottom={"5px"}
          >
            {chatname}
          </Text>
          <Text
            fontSize={12}
            fontWeight={400}
            color="#555555"
            lineHeight="15px"
          >
            {lastmsg}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexDir="column">
        <Text
          fontSize={12}
          fontWeight={400}
          color="#808080"
          lineHeight="15px"
          marginBottom="5px"
        >
          {lastmsg_time}
        </Text>
        <Circle size="20px" p={2} bg="#7B58F4" color="#FFFFF">
          <Text fontSize={12} color="#FFFFFF">
            {unread_messages}
          </Text>
        </Circle>
      </Flex>
    </Box>
    </Link>
  );
};

export default ChatDisplay;
