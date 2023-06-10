import React from "react";
import { Box, Flex, Input, Link, IconButton } from "@chakra-ui/react";
import{ BsSend } from "react-icons/bs"
import { HiOutlineMicrophone} from "react-icons/hi"

interface InputProps {
    inputMessage: (value: string) => string;
    setInputMessage: (params: any) => any;
    handleSendMessage: (params: any) => any;
}
const ChatInput = ({ inputMessage, setInputMessage, handleSendMessage }: InputProps) => {
    return (
        <Box position="fixed" w="100%" padding="10px" bottom="0px" display="flex" justifyContent="center" alignItems="center">
            <Flex position="relative" border="1px" borderRadius="4px" borderColor="#AAAAAA"  alignItems="center" justifyContent="space-between" padding="8px" w="367px" h="48px">
                <Input
                    placeholder="Type your message"
                    border="none"
                    focusBorderColor="#fff"
                    
                />
                <Flex>
                    <IconButton aria-label="Send Message" border="none" bg="#fff" icon={<BsSend />} fontSize="20px" color="#7858F4" />
                    <IconButton aria-label="Record voice messagea" border="none" bg="#fff" icon={<HiOutlineMicrophone />} fontSize="20px"  color="#7858F4" />
                </Flex>
                
            </Flex>
        </Box>
        
    )
}

export default ChatInput;