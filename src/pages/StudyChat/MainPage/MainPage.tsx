import { Box, Text, Flex, IconButton, Link } from "@chakra-ui/react";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { BottomNav } from "../../../components/Navigation";
import ChatDisplay from '../Components/ChatDisplay';
import { motion } from "framer-motion";
import { messageTemplate } from "../Components/MessageData";


const ChatPage = () => {

  const MotionContainer = motion(Box)

  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}

      pos={"relative"}
      width={"100%"}
      height="full"
    >
      
      <Box top={"74px"} w={"100%"} h={"24px"} 
        pos={"absolute"} display={"flex" } alignItems={"center"}
        justifyContent="space-between" >

        <Text fontSize={18} fontWeight={600} color="#7B58F4">Klosanow</Text>

        <Flex flexDir="row" justifyContent="space-between">
          <IconButton aria-label="Search" icon={<FiSearch />} bg="none" fontSize="16px" size={"xs"} />
        <IconButton aria-label="Settings" icon={<FiMoreVertical />} bg="none" fontSize="16px" size={"xs"} />
        </Flex>
      </Box>
      <Box top={"122px"} pos={"absolute"} width={"100%"}
        display="flex" alignItems={"flex-start"} justifyContent="center" flexDir="column">  
        {
          messageTemplate.map((message) => {
            return (
                <ChatDisplay chatId={message.key} chatname={message.chatname} lastmsg={message.lastmsg} unread_messages={message.unread_messages} lastmsg_time={message.lastmsg_time} />
            )
          })
        }
      </Box>
      <BottomNav />
    </MotionContainer>
  )
}

export default ChatPage