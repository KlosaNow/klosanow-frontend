import React from "react";
import { Box, Text, Image, Flex, Circle } from "@chakra-ui/react";
import { ChatListItemType } from "../../../../types/studyChat";
import { useSearchParams } from "react-router-dom";

interface ChatListItemProps {
  data: ChatListItemType;
}

const ChatListItem: React.FC<ChatListItemProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const param = searchParams.get("slug");

  const {
    groupName,
    slug,
    groupImage,
    lastmsg,
    lastmsg_time,
    unread_messages,
  } = props.data;

  const icon = groupImage || "https://picsum.photos/40/40";

  const updateUrl = () => {
    setSearchParams({ slug });
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
        bg={param === slug ? "#F3ECF8" : "transparent"}
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
              {groupName}
            </Text>

            <Text
              fontSize={12}
              fontWeight={400}
              color="#555555"
              lineHeight="15px"
            >
              {lastmsg}
            </Text>
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
            {lastmsg_time}
          </Text>

          {unread_messages > 0 && (
            <Circle size="20px" p={2} bg="#BDABF9">
              <Text fontSize={12}>{unread_messages}</Text>
            </Circle>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default ChatListItem;
