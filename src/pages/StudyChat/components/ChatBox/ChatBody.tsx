import React from "react";
import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import { uniqueId } from "lodash";
import { ChatListData, MessageType } from "src/types";
import { getUploadedDataPreview } from "../../utils";

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
  const recipientId = activeChat.recipient?._id;

  const extractURLs = (text: string) => {
    const urlRegex = /\b((https?:\/\/|www\.)[^\s/$.?#].[^\s]*)/gi;
    const matchedUrls = text.match(urlRegex) || [];
    return matchedUrls;
  };

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
      zIndex={1000}
    >
      {!loading && messages?.length > 0
        ? [...messages].reverse().map((item) => {
            const urls = extractURLs(item.text) || [];
            return (
              <Box
                key={uniqueId(`message-${item._id}`)}
                alignSelf={recipientId === item._id ? "flex-start" : "flex-end"}
                maxW="60%"
              >
                <Flex gap="4px">
                  {recipientId === item._id && (
                    <Circle size="20px" bg="#eee" overflow="hidden">
                      <Image
                        src={activeChat?.img || "https://picsum.photos/50/50"}
                        alt="chat"
                      />
                    </Circle>
                  )}

                  <Flex
                    backgroundColor={
                      recipientId === item._id ? "#D3C7FB" : "#F3ECF8"
                    }
                    boxShadow="md"
                    borderRadius={14}
                    minW={50}
                    padding={"4px 8px"}
                    flexDir={"column"}
                    gap={"4px"}
                  >
                    {urls.length > 0
                      ? urls.map((url) => getUploadedDataPreview(url))
                      : null}

                    <Text wordBreak={"break-word"} fontSize="14px">
                      {item.text}
                    </Text>

                    {recipientId === item._id && (
                      <Text textAlign={"end"} fontSize="9px">
                        {item.sender?.name}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              </Box>
            );
          })
        : undefined}

      {!loading && !messages && (
        <Box textAlign={"center"}>
          <Text>Start sending message to group</Text>
        </Box>
      )}

      {loading && activeChat.id && (
        <Box textAlign={"center"}>
          <Text>Fetching chats...</Text>
        </Box>
      )}
    </Flex>
  );
};

export default ChatBody;
