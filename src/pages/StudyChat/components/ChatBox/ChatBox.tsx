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

const ChatBox: React.FC<ChatBoxProps> = ({ chat }) => {
  const { getChat, getStudyChat, eventType } = useChatWebSocket();
  const { loadingMessage, updateStudyChatValues } =
    React.useContext(StudyChatContext);

  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const [isSent, setIsSent] = React.useState(false);

  const handleRefresh = () => {
    if (!chat?.id) updateStudyChatValues({ isNewChat: true });
    setIsSent(true);
  };

  const handleFetchChat = React.useCallback(() => {
    if (!chat?.id) {
      setMessages([]);
      return;
    }

    try {
      if (chat.type === ChatType.Single) {
        getChat(chat.id, (messages) => {
          setMessages(messages);
        });
      } else if (chat.type === ChatType.Group) {
        getStudyChat(chat.id, (messages) => {
          setMessages(messages);
        });
      } else {
        setMessages([]);
      }
    } finally {
      updateStudyChatValues({ loadingMessage: false });
      setIsSent(false);
    }
  }, [chat?.id, loadingMessage]);

  React.useEffect(() => {
    if (eventType === "ping" || eventType === "message" || isSent)
      handleFetchChat();
  }, [handleFetchChat, eventType, isSent]);

  return (
    <>
      {chat && (
        <Box
          as={motion.div}
          padding={["0 0 100px", "60px 0 0"]}
          animation={containerAnimation}
          initial="hidden"
          animate="show"
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
                messages={messages}
                loading={loadingMessage}
                activeChat={chat}
              />
              <ChatFooter
                activeChat={chat}
                loading={loadingMessage}
                refresh={handleRefresh}
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
          desc="Send and receive messages from your contacts"
        />
      </Box>
    </>
  );
};

export default ChatBox;
