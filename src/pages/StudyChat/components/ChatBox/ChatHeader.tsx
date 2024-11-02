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
import { OptionIcon, SearchIcon } from "../../assets/svgs";
import { ChatListItemType } from "../../../../types/studyChat";
import { uniqueId } from "lodash";
import { StudyChatContext } from "../../context/StudyChat";
import { useSearchParams } from "react-router-dom";

interface ChatHeaderProps {
  data: ChatListItemType;
}
const ChatHeader: React.FC<ChatHeaderProps> = ({ data }) => {
  const { updateStudyChatValues } = React.useContext(StudyChatContext);
  const [_, setSearchParams] = useSearchParams();

  return (
    <Flex
      h="94px"
      bg="#F3ECF8"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Flex alignItems="center">
        <Circle size="50px" overflow="hidden" bg="#808080">
          <Image
            src={data.groupImage || "https://picsum.photos/50/50"}
            alt={data.slug}
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
          ml="12px"
          onClick={() =>
            updateStudyChatValues({
              isChatDetailFlyout: true,
              activeChat: data,
            })
          }
        >
          <Text fontSize="14px" fontWeight="500" mb="8px">
            {data.groupName}
          </Text>

          {data.contacts && (
            <Flex
              gap="3px"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {data.contacts.map(({ name }, index, arr) => (
                <Text key={uniqueId("header-contact-list")} fontSize="14px">
                  {name}
                  {index !== arr.length - 1 ? "," : "."}
                </Text>
              ))}
            </Flex>
          )}
        </Box>

        <Flex ml="4px">
          <IconButton
            bg="transparent"
            _hover={{
              bg: "transparent",
            }}
            aria-label="search"
            icon={<SearchIcon />}
          />

          <Popover placement={"bottom-end"}>
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
            <PopoverContent w="100px" overflow="hidden" p="5px 0">
              <Box
                as="button"
                fontSize="12px"
                padding="4px 6px"
                onClick={() => setSearchParams("")}
                _hover={{
                  bg: "#eee",
                }}
              >
                Close
              </Box>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChatHeader;
