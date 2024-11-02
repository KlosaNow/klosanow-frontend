import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import { uniqueId } from "lodash";
import { ChatListItemType } from "../../../../types/studyChat";
import { useNavigate } from "react-router-dom";
import { createStudyChatPath } from "../../../../data/pageUrl";

interface ChatListProps {
  list: Array<ChatListItemType>;
}

const ChatList: React.FC<ChatListProps> = ({ list }) => {
  const navigate = useNavigate();

  return (
    <Box width="100%" maxWidth="523px" bg="#fafafa" p="10px 30px">
      <Flex justifyContent="space-between" mb="24px" alignItems="center">
        <Heading
          fontFamily="Playfair Display, serif"
          fontSize={["18px", "24px"]}
        >
          All Chats ({list.length})
        </Heading>

        <Button
          onClick={() =>
            navigate(
              { pathname: createStudyChatPath },
              {
                state: {
                  contacts: [],
                  isContactsAdded: false,
                },
              }
            )
          }
          bg="#9174F6"
          _hover={{ bg: "#A790F8" }}
          color="#fff"
          fontSize={["13px", "16px"]}
        >
          Create Study Group
        </Button>
      </Flex>

      <Flex
        gap="20px"
        flexDir="column"
        h="598px"
        overflowY="scroll"
        className="scrollbar"
        pr={{
          base: "5px",
          lg: "13px",
        }}
      >
        {list &&
          list.map((item) => (
            <ChatListItem data={item} key={uniqueId("chat-list-item")} />
          ))}
      </Flex>
    </Box>
  );
};

export default ChatList;
