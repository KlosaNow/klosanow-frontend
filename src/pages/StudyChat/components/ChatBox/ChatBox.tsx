import React from "react";
import { Box } from "@chakra-ui/react";
import StudyChatEmptyState from "../StudyChatEmptyState";
import { motion } from "framer-motion";
import StudyChatEmptyStateIllustration from "../../assets/images/StudyChatEmptyStateIllustration.jpg";
import { containerAnimation, contentAnimation } from "../../data";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import useChatWebSocket from "src/hooks/useChatWebSocket";
import { ChatListData, ChatType, MessageType } from "src/types";
import { StudyChatContext } from "../../context/StudyChat";

interface ChatBoxProps {
  chat: ChatListData;
}

interface ChatBoxState {
  isSent: boolean;
  messages: MessageType[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ chat }) => {
  const { getChat, getStudyChat } = useChatWebSocket();
  const { loadingMessage, updateStudyChatValues } =
    React.useContext(StudyChatContext);

  const initialState: ChatBoxState = {
    isSent: false,
    messages: [],
  };

  const [state, setState] = React.useState(initialState);

  const handleStateUpdate = (newState: Partial<ChatBoxState>) =>
    setState((_state) => ({ ..._state, ...newState }));

  const handleFetchChatAction = () => {
    if (chat.type === ChatType.Single) {
      return getChat(chat.id, (messages) => {
        handleStateUpdate({ messages, isSent: false });
        updateStudyChatValues({ loadingMessage: false });
      });
    }
    if (chat.type === ChatType.Group) {
      return getStudyChat(chat.id, (messages) => {
        handleStateUpdate({ messages, isSent: false });
        updateStudyChatValues({ loadingMessage: false });
      });
    } else return null;
  };

  const handleFetchChat = React.useCallback(() => {
    if (!chat) return;

    handleFetchChatAction();
  }, [chat, state.isSent]);

  React.useEffect(() => {
    handleFetchChat();
  }, [chat, state.isSent]);

  return (
    <>
      {chat && (
        <Box
          as={motion.div}
          padding={["0 0 100px", "60px 0 0"]}
          animation={containerAnimation}
          maxW={{
            base: "500px",
            lg: "380px",
            xl: "653px",
          }}
          w="100%"
          h="100vh"
          top="0"
          right="0"
          position="fixed"
          background="#fff"
        >
          <Box as={motion.div} animation={contentAnimation} h="100%">
            <ChatHeader data={chat} />
            <Box height="100%">
              <ChatBody
                messages={state.messages}
                loading={loadingMessage}
                activeChat={chat}
              />
              <ChatFooter
                activeChat={chat}
                handleRefresh={() => handleStateUpdate({ isSent: true })}
                loading={loadingMessage}
              />
            </Box>
          </Box>
        </Box>
      )}

      <Box
        display={{
          base: "none",
          lg: "block",
        }}
        w="100%"
        padding={"10px 30px 0"}
      >
        <StudyChatEmptyState
          title="Study Chat"
          image={StudyChatEmptyStateIllustration}
          desc="Send and receive video lessons from your contacts"
        />
      </Box>
    </>
  );
};

export default ChatBox;
