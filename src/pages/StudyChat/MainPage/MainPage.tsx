import { useState} from "react"
import { Box, Text, Flex, Icon, IconButton, Link } from "@chakra-ui/react";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { BottomNav } from "../../../components/Navigation";
import ChatDisplay from '../Components/ChatDisplay';
import { motion } from "framer-motion";
import { messageTemplate } from "../Components/MessageData";


const ChatPage = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const MotionContainer = motion(Box)

  
    const toggleMenu = () => {
        setIsVisible(!isVisible)
    }

  const HeadMenu = () => {
    return (
        <Flex display={isVisible ? "flex" : "none"} pos="absolute" top="98px" right="16px"
            flexDir={"column"} boxSizing="border-box"
            zIndex="999"
            padding="16px 8px"
            justifyContent={"center"} alignItems={"center"} 
            boxShadow="0px 4px 4px rgba(25, 18, 49, 0.12)"
            borderRadius="4px" bg="#fff"
            height={"78px"} width={"162px"}
        >
            <Box
                borderBottom="0.5px solid #CCCCCC"
                width="156px" height="23px"
                alignItems="flex-start" justifyContent="center"
                padding="4px 10px" gap="4px"
            >
                <Text color="#555555" fontSize="12px" fontWeight="400"
                    lineHeight="15px"
                >
                  Create a new study group
                </Text>
            </Box>
            <Box display="flex"
                width="146px" height="23px"
                alignItems="flex-start" justifyContent="center"
                padding="4px 10px" gap="4px"
            >
                <Text color="#555555" fontSize="12px" fontWeight="400"
                    lineHeight="15px"
                >
                    Create Study Groups
                </Text>
            </Box>
        </Flex>
    )
}


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
        <IconButton aria-label="Settings" onClick={toggleMenu} icon={<FiMoreVertical />} bg="none" fontSize="16px" size={"xs"} />
        </Flex>
      </Box>
      <HeadMenu />
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