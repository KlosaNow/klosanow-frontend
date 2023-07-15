import { useState, useEffect } from "react"
import { Box, Text, Flex, Link,  IconButton } from "@chakra-ui/react";
import { BottomNav } from "../../../components/Navigation";
import ChatDisplay from '../Components/ChatDisplay';
import { motion } from "framer-motion";
import { messageTemplate } from "../Components/Data/MessageData";

import { Link as ReactRouterLink} from "react-router-dom";

import { SearchIcon, MenuIcon } from "../Components/Icons";


const ChatPage = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const MotionContainer = motion(Box)

  const HeadMenu = () => {
    return (
        <Box pos="absolute" display={isVisible ? 'flex' : 'none'}
          borderRadius={"4px"} width={"162px"} padding={"16px 8px"}
          border={"0.5px solid #fff"} background={"#fff"} zIndex={"9999"}
          right="8px" top="24px"
          boxShadow={"0px 4px 4px 0px rgba(25, 18, 49, 0.12)"}
        >
          <Flex flexDir={"column"} align={"flex-start"} justifyContent={"center"}>
            <Box padding={"4px"} alignSelf={"stretch"} gap={"4px"}
              borderBottom={"0.5px solid #CCC"}
            >
              <Text color="#555555" 
                fontSize="12px" fontWeight="400"
                lineHeight="15px"
              >
                Create a new study group
              </Text>
            </Box>
            <Box padding={"4px"} alignSelf={"stretch"} gap={"4px"}>
              <Text color="#555555" fontSize="12px" fontWeight="400"
                lineHeight="15px"
              >
                Create Study Groups
              </Text>
            </Box>
          </Flex>
        </Box>
    )
}
  useEffect(() => {
  }, [isVisible]);

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

        <Box>
          <Text fontSize="18px" fontWeight={500} lineHeight={"normal"} color="#7B58F4">Klosanow</Text>
        </Box>

        <Flex flexDir="row" gap="9px">
          <Link as={ReactRouterLink} to="/studychat/search-contacts">
            <IconButton aria-label="Search" icon={<SearchIcon />} bg="none" fontSize="16px" size={"xs"} />
          </Link>
          <IconButton aria-label="Settings" onClick={() => {
          setIsVisible(!isVisible)}} icon={<MenuIcon />} bg="none" fontSize="16px" size={"xs"} />
          <HeadMenu />
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