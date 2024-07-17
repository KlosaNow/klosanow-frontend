import React from "react";
import { Box, CloseButton } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import StudyChatEmptyState from "../StudyChatEmptyState";
import { motion } from "framer-motion";
import StudyChatEmptyStateIllustration from "../../assets/images/StudyChatEmptyStateIllustration.jpg";
import {
  CHAT_LIST_MOCKDATA,
  containerAnimation,
  contentAnimation,
} from "../../data";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatBox: React.FC = () => {
  const [searchParams] = useSearchParams();

  const slug = searchParams.get("slug");

  const activeChat = slug
    ? CHAT_LIST_MOCKDATA.find((item) => item.slug === slug)
    : CHAT_LIST_MOCKDATA[0];

  return (
    <>
      {slug && (
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
            <ChatHeader data={activeChat!} />
            <Box height="100%">
              <ChatBody />
              <ChatFooter />
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
        padding={"100px 30px 0"}
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
