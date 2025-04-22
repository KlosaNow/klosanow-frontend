import React from "react";
import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import { uniqueId } from "lodash";
import { ChatListData, MessageType } from "src/types";

interface ChatBodyProps {
  messages: Array<MessageType>;
  loading: boolean;
  activeChat: ChatListData;
}

const ChatBody: React.FC<ChatBodyProps> = ({
  messages,
  loading,
  activeChat,
}) => {
  return (
    <Flex
      h={{
        base: "calc(100% - 179px)",
        md: "calc(100% - 214px)",
      }}
      p={"10px 16px 0"}
      overflowY="scroll"
      flexDir={"column-reverse"}
      gap="10px"
      w="100%"
    >
      {!loading && messages.length > 0
        ? messages.reverse().map((item) => (
            <Box
              key={uniqueId("message")}
              alignSelf={
                activeChat?.id === item._id ? "flex-start" : "flex-end"
              }
              maxW="60%"
            >
              <Flex gap="4px">
                {activeChat?.id === item._id && (
                  <Circle size="20px" bg="#eee" overflow="hidden">
                    <Image
                      src={activeChat?.img || "https://picsum.photos/50/50"}
                      alt="chat"
                    />
                  </Circle>
                )}

                <Text
                  backgroundColor={
                    activeChat?.id === item._id ? "#D3C7FB" : "#F3ECF8"
                  }
                  wordBreak={"break-word"}
                  boxShadow="md"
                  borderRadius={14}
                  padding={"4px 8px"}
                  fontSize="13px"
                >
                  {item.text}
                </Text>
              </Flex>
            </Box>
          ))
        : undefined}

      {loading && activeChat.id && (
        <Box textAlign={"center"}>
          <Text>Fetching chats...</Text>
        </Box>
      )}
    </Flex>
  );
};

export default ChatBody;
