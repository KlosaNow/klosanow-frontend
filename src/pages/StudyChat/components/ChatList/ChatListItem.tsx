import React from "react";
import { Box, Text, Image, Flex, Circle } from "@chakra-ui/react";
import { ChatListData } from "../../../../types/studyChat";
import { useSearchParams } from "react-router-dom";
import { StudyChatContext } from "../../context/StudyChat";
import { formatDistanceToNow } from "date-fns";
import { getContactDisplayName } from "../../utils";

interface ChatListItemProps {
  data: ChatListData | null;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { updateStudyChatValues } = React.useContext(StudyChatContext);

  const param = searchParams.get("slug");

  const icon = data?.img || "https://picsum.photos/40/40";

  const updateUrl = () => {
    setSearchParams({ slug: data?.slug || "" });
    updateStudyChatValues({ activeChat: data, loadingMessage: true });
  };

  return (
    <Box as="div" width="full" cursor="pointer" onClick={updateUrl}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth="0.2px"
        borderBottomColor="neutral.70"
        padding="10px 10px"
        bg={param === data?.slug ? "#F3ECF8" : "transparent"}
      >
        <Flex justifyContent="space-between" gap="8px">
          <Circle size="50px" bg="#b1b1b1" overflow="hidden">
            <Image src={icon} />
          </Circle>

          <Flex justifyContent="center" flexDir="column">
            <Text
              fontSize={14}
              fontWeight={500}
              color="#2A2A2A"
              lineHeight="17.5px"
              marginBottom="5px"
            >
              {getContactDisplayName(data as any)}
            </Text>

            {data?.last_msg && (
              <Text
                fontSize={12}
                fontWeight={400}
                color="#555555"
                lineHeight="15px"
              >
                {data.last_msg}
              </Text>
            )}
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="center" flexDir="column">
          <Text
            fontSize={12}
            fontWeight={400}
            color="#555555"
            lineHeight="15px"
            marginBottom="5px"
          >
            {formatDistanceToNow(data?.last_msg_time || "")} ago
          </Text>

          {data?.unread_messages && data.unread_messages > 0 ? (
            <Circle size="20px" p={2} bg="#BDABF9">
              <Text fontSize={12}>{data.unread_messages}</Text>
            </Circle>
          ) : undefined}
        </Flex>
      </Box>
    </Box>
  );
};

export default ChatListItem;
