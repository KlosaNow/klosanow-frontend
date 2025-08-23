import React from "react";
import {
  Box,
  Circle,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { OptionIcon } from "../../assets/svgs";
import { ChatListData, ChatType } from "../../../../types/studyChat";
import { uniqueId } from "lodash";
import { StudyChatContext } from "../../context/StudyChat";
import { useSearchParams } from "react-router-dom";
import useChatWebSocket from "src/hooks/useChatWebSocket";
import { removeStorageItem } from "src/utils/generics";
import { CHAT_CONTACT_KEY } from "src/data/constants";
import { useStoreSelector } from "src/redux/hooks";

interface ChatHeaderProps {
  data: ChatListData;
}
const ChatHeader: React.FC<ChatHeaderProps> = ({ data }) => {
  const { updateStudyChatValues } = React.useContext(StudyChatContext);
  const { deleteChat, deleteStudyChat } = useChatWebSocket();
  const [_, setSearchParams] = useSearchParams();
  const user = useStoreSelector((state) => state.user);

  const handleClose = () => {
    setSearchParams("");
    updateStudyChatValues({ activeChat: null });
  };

  const handleDeleteChat = () => {
    data.type === ChatType.Single
      ? deleteChat(data.id)
      : deleteStudyChat(data.id);

    handleClose();
    removeStorageItem(CHAT_CONTACT_KEY);
  };

  return (
    <Flex
      h="94px"
      w="100%"
      bg="#F3ECF8"
      justifyContent="center"
      alignItems="center"
      position="relative"
      zIndex={10000}
    >
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        p="0 16px"
      >
        <Flex gap="12px" align="center">
          <Circle size="50px" overflow="hidden" bg="#808080">
            <Image
              src={data?.img || "https://picsum.photos/50/50"}
              alt={data?.slug}
            />
          </Circle>

          <Box
            w="100%"
            minW={{
              base: "200px",
              xl: "442px",
            }}
            maxW={{
              base: "200px",
              md: "300px",
              lg: "200px",
              xl: "442px",
            }}
            overflowX="hidden"
            onClick={() =>
              updateStudyChatValues({
                isChatDetailFlyout: true,
                activeChat: data,
              })
            }
          >
            <Text fontSize="14px" fontWeight="500" mb="8px">
              {data?.name}
            </Text>

            {data?.members ? (
              <Flex
                gap="3px"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                {data.members.map(({ name, _id }, index, arr) => (
                  <Text key={uniqueId("header-contact-list")} fontSize="14px">
                    {user.data?._id === _id ? "You" : name}
                    {index !== arr.length - 1 ? "," : "."}
                  </Text>
                ))}
              </Flex>
            ) : (
              <Text fontSize="12px">{data.description}</Text>
            )}
          </Box>
        </Flex>

        <Popover placement="bottom-start" offset={[-20, -10]}>
          <PopoverTrigger>
            <IconButton
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
              aria-label="option"
              icon={<OptionIcon />}
            />
          </PopoverTrigger>

          <PopoverContent w="max-content" overflow="hidden" p="2px">
            <Box
              as="button"
              fontSize="12px"
              padding="6px 14px"
              onClick={handleClose}
              textAlign={"start"}
              _hover={{
                bg: "#eee",
              }}
            >
              Close
            </Box>
            <Box
              as="button"
              fontSize="12px"
              padding="6px 14px"
              textAlign={"start"}
              display={"none"}
              onClick={handleDeleteChat}
              _hover={{
                bg: "#eee",
              }}
            >
              Delete
            </Box>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
};

export default ChatHeader;
