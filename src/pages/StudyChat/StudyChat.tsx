import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { BottomNav } from "../../components";
import ChatDisplay from "./Components/ChatDisplay";

const StudyChat = () => {
  const messages = [
    {
      chatname: "Gloria",
      lastmsg: "How was your day?",
      unread_messages: 1,
      lastmsg_time: "1:00 am",
    },
    {
      chatname: "Math 101",
      lastmsg: "Can we have class by 1",
      unread_messages: 7,
      lastmsg_time: "10:00 pm",
    },
  ];

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="15px 0px 0px"
      >
        <Text fontSize={18} fontWeight={500} color="primary.50">
          Klosanow
        </Text>

        <Flex flexDir="row" justifyContent="space-between">
          <Icon as={FiSearch} fontSize="24px" marginRight="10px" />
          <Icon as={FiMoreVertical} fontSize="24px" />
        </Flex>
      </Box>
      <Box
        mt="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        {messages
          ? messages.map((message) => {
              return (
                <ChatDisplay
                  chatname={message.chatname}
                  lastmsg={message.lastmsg}
                  unread_messages={message.unread_messages}
                  lastmsg_time={message.lastmsg_time}
                />
              );
            })
          : null}
      </Box>
      <BottomNav />
    </Box>
  );
};

export default StudyChat;
