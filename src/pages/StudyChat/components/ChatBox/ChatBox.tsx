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

interface ChatBoxProps {
  chat: ChatListData;
}

const ChatBox: React.FC<ChatBoxProps> = ({ chat }) => {
  const { getChat, getStudyChat } = useChatWebSocket();

  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleFetchChatAction = () => {
    if (chat.type === ChatType.Single) {
      return getChat(chat.id, (messages) => {
        setLoading(false);
        setMessages(messages);
      });
    } else {
      return getStudyChat(chat.id, (messages) => {
        setLoading(false);
        setMessages(messages);
      });
    }
  };

  const handleFetchChat = React.useCallback(() => {
    if (!chat) return;

    setLoading(true);
    handleFetchChatAction();
  }, [chat]);

  React.useEffect(() => {
    handleFetchChat();
  }, [chat]);

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
                messages={messages}
                loading={loading}
                activeChat={chat}
              />
              <ChatFooter
                activeChat={chat}
                handleRefresh={handleFetchChatAction}
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
