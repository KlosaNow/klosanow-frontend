import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import MessageLink from '../Components/ChatLink';
import { BottomNav } from '../../../components/Navigation';
import { messageTemplate } from '../Components/MessageData';

const MessagesPage = () => {

  return (
    <Box px="15px" width="100%" height="full">
      <Box mt="24px" h="24px" display="flex" alignItems="center"
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
          messageTemplate.map((message) => {
            return (
              <MessageLink chatname={message.chatname} lastmsg={message.lastmsg} unread_messages={message.unread_messages} lastmsg_time={message.lastmsg_time} />
            )
          })
        }
      </Box>
      <BottomNav />
    </Box >
  )
}

export default MessagesPage;