import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import { uniqueId } from "lodash";
import { ChatListData } from "../../../../types/studyChat";
import { Link, useNavigate } from "react-router-dom";
import {
  contactsPagePath,
  createStudyChatPath,
} from "../../../../data/pageUrl";
import { BsChatLeftText } from "react-icons/bs";
import { ContactIcon } from "src/assets/svgs";

interface ChatListProps {
  chatList: Array<ChatListData | null>;
  studyChatList: Array<ChatListData> | [];
}

const ChatList: React.FC<ChatListProps> = ({ chatList, studyChatList }) => {
  const navigate = useNavigate();

  const list = [...studyChatList, ...chatList];

  return (
    <Box width="100%" maxWidth="523px" bg="#fafafa" p="24px 30px">
      <Flex justifyContent="space-between" mb="24px" alignItems="center">
        <Heading
          fontFamily="Playfair Display, serif"
          fontSize={["18px", "24px"]}
        >
          All Chats ({list?.length})
        </Heading>

        <Flex align="center" gap="6px">
          <Box
            as="button"
            display={["flex", "none"]}
            onClick={() => navigate(contactsPagePath)}
          >
            <ContactIcon />
          </Box>

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
      </Flex>

      {list && list.length > 0 ? (
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
          {studyChatList.map((item) => (
            <ChatListItem data={item} key={uniqueId("study-chat-list-item")} />
          ))}

          {chatList.map((item) => (
            <ChatListItem data={item} key={uniqueId("chat-list-item")} />
          ))}
        </Flex>
      ) : (
        <Box display={"grid"} placeItems={"center"} mt="100px">
          <BsChatLeftText fontSize={78} />
          <Text fontSize="13px">You have not initiated any chat.</Text>
          <Text fontSize="13px" textAlign={"center"}>
            Click{" "}
            <Link to={contactsPagePath} style={{ textDecoration: "underline" }}>
              here
            </Link>{" "}
            to start a chat or click{" "}
            <span
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
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              here
            </span>{" "}
            to start a group chat.
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ChatList;
