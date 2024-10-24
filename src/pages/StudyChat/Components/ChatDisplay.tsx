import { LinkBox, Box, Text, Image, Flex, Circle } from "@chakra-ui/react";

const ChatDisplay = ({
  chatname,
  lastmsg,
  lastmsg_time,
  unread_messages,
}: {
  chatname: string;
  lastmsg: string;
  lastmsg_time: string;
  unread_messages: number;
}) => {
  return (
    <LinkBox as="div" width="full" marginY="5px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth="0.2px"
        borderBottomColor="neutral.70"
        padding="10px 0px"
      >
        <Flex justifyContent="space-between" gap="8px">
          <Circle size="40px" bg="#b1b1b1" overflow="hidden">
            <Image src="https://picsum.photos/40/40" />
          </Circle>
          <Flex alignItems="Circle" justifyContent="center" flexDir="column">
            <Text
              fontSize={14}
              fontWeight={500}
              color="#2A2A2A"
              lineHeight="17.5px"
              marginBottom="5px"
            >
              {chatname}
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
          <Circle size="20px" p={2} bg="#7B58F4" color="#FFFFF">
            <Text fontSize={12} color="#FFFFFF">
              {unread_messages}
            </Text>
          </Circle>
        </Flex>
      </Box>
    </LinkBox>
  );
};

export default ChatDisplay;
