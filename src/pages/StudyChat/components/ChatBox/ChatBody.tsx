import React from "react";
import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import { ChatListData, ChatType, MessageType } from "src/types";
import { getUploadedDataPreview } from "../../utils";
import { useStoreSelector } from "src/redux/hooks";

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
  const mediaCacheRef = React.useRef<Record<string, JSX.Element | null>>({});

  const [, forceUpdate] = React.useState(0);
  const user = useStoreSelector((state) => state.user);
  const senderId =
    activeChat.members?.find((item) => item._id === user.data?._id)?._id ||
    activeChat.admin?._id;

  const extractURLs = (text: string) => {
    const urlRegex = /\b((https?:\/\/|www\.)[^\s/$.?#].[^\s]*)/gi;
    const matchedUrls = text.match(urlRegex) || [];
    return matchedUrls;
  };

  const reformatText = (text: string) => {
    const urlRegex = /\b((https?:\/\/|www\.)[^\s/$.?#].[^\s]*)/gi;

    return text.replace(urlRegex, (url) => {
      try {
        const fixedUrl = url.startsWith("www.") ? "https://" + url : url;
        const urlObj = new URL(fixedUrl);

        const pathname = urlObj.pathname;
        const filename = pathname.substring(pathname.lastIndexOf("/") + 1);

        const ext = filename.includes(".")
          ? filename.split(".").pop()?.toLowerCase()
          : "";

        return ext || url;
      } catch {
        return url;
      }
    });
  };

  const reversedMessages = React.useMemo(() => {
    let newMessages: MessageType[] = [];
    if (activeChat.id) newMessages = [...messages].reverse();
    else newMessages = [];

    return newMessages;
  }, [messages, activeChat?.id]);

  React.useEffect(() => {
    if (!reversedMessages) return;

    let updated = false;
    reversedMessages.forEach((item) => {
      const urls = extractURLs(item.text) || [];
      urls.forEach((url) => {
        if (!(url in mediaCacheRef.current)) {
          const preview = getUploadedDataPreview(url) ?? null;
          mediaCacheRef.current[url] = preview;
          updated = true;
        }
      });
    });

    if (updated) {
      forceUpdate((count) => count + 1);
    }
  }, [reversedMessages]);

  return (
    <Flex
      h={{
        base: "calc(100dvh - 200px)",
        md: "calc(100vh - 264px)",
      }}
      p={"10px 16px 0"}
      overflowY="scroll"
      flexDir={"column-reverse"}
      gap="10px"
      w="100%"
      zIndex={1000}
    >
      {!loading && messages?.length > 0
        ? reversedMessages?.map((item) => {
            const urls = extractURLs(item.text) || [];
            const isSender = senderId !== item.sender._id;

            return (
              <Box
                key={item._id}
                alignSelf={isSender ? "flex-start" : "flex-end"}
                maxW="60%"
              >
                <Flex gap="4px">
                  {isSender && (
                    <Circle size="20px" bg="#eee" overflow="hidden">
                      <Image
                        src={activeChat?.img || "https://picsum.photos/50/50"}
                        alt="chat"
                      />
                    </Circle>
                  )}

                  <Flex
                    backgroundColor={isSender ? "#D3C7FB" : "#F3ECF8"}
                    boxShadow="md"
                    borderRadius={14}
                    minW={50}
                    padding={"4px 8px"}
                    flexDir={"column"}
                    gap={"4px"}
                  >
                    {urls.map((url) => {
                      const cachedPreview = mediaCacheRef.current[url];
                      if (cachedPreview !== undefined) {
                        return cachedPreview || null;
                      }
                      return getUploadedDataPreview(url);
                    })}

                    <Text wordBreak={"break-word"} fontSize="14px">
                      {reformatText(item.text)}
                    </Text>

                    {isSender && activeChat.type === ChatType.Group && (
                      <Text fontSize="9px">{item.sender?.name}</Text>
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
          <Text>Connecting...</Text>
        </Box>
      )}
    </Flex>
  );
};

export default ChatBody;
