import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import ChatDisplay from '../Components/ChatDisplay';

const MainPage = () => {

  const messages = [
    {
      chatname: 'Gloria',
      lastmsg: 'How was your day?',
      unread_messages: 1,
      lastmsg_time: "1:00 am"
    },
    {
      chatname: 'Math 101',
      lastmsg: 'Can we have class by 1',
      unread_messages: 7,
      lastmsg_time: "10:00 pm"
    }
  ]

  return (
    <Box px="15px" width="100%" height="full">
      <Box mt="78px" h="24px" display="flex" alignItems="center"
        justifyContent="space-between" >
        <Text fontSize={18} fontWeight={600} color="#7B58F4">Klosanow</Text>

        <Flex w="57px" flexDir="row"
          justifyContent="space-between" >
          <Icon as={FiSearch} boxSize={5} />
          <Icon as={FiMoreVertical} boxSize={5} />
        </Flex>
      </Box>
      <Box mt="20px" display="flex" alignItems="center" justifyContent="center" flexDir="column">
        {
          messages ? messages.map((message) => {
            return (
              <ChatDisplay chatname={message.chatname} lastmsg={message.lastmsg} unread_messages={message.unread_messages} lastmsg_time={message.lastmsg_time} />
            )
          }) : null
        }
      </Box>
    </Box >
  )
}

export default MainPage