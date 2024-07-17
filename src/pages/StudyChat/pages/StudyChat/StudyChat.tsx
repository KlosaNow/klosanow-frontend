import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { CHAT_LIST_MOCKDATA } from "../../data";
import { BottomNav } from "../../../../components";
import ChatList from "../../components/ChatList";
import ChatBox from "../../components/ChatBox";
import {
  DefaultValues,
  DefaultValuesProps,
  StudyChatContext,
} from "../../context/StudyChat";
import { ChatDetailFlyout } from "../../flyouts";

const StudyChat: React.FC = () => {
  const messages = CHAT_LIST_MOCKDATA;

  const [state, setState] = React.useState<DefaultValuesProps>(DefaultValues);

  const handleStateUpdate = (newState: Partial<DefaultValuesProps>) =>
    setState((state) => ({ ...state, ...newState }));

  return (
    <StudyChatContext.Provider
      value={{
        ...state,
        updateStudyChatValues: handleStateUpdate,
      }}
    >
      <Box height="100vh">
        <Flex width="100%" h="100%" position="relative">
          <ChatList list={messages} />
          <ChatBox />
        </Flex>

        <BottomNav />

        <ChatDetailFlyout />
      </Box>
    </StudyChatContext.Provider>
  );
};

export default StudyChat;
