import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { ChatInput } from "../Components"

interface Messages {
    from: string;
    chatId: number;
    message: string;

}

interface ChatAreaProps {
    messages: Messages[];
  }

  const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
    
    return (
        <Flex flexDir="column">
            {
                messages.map((msg) => 
                    msg.from === 'You' ? 
                    (
                        <Box key={msg.chatId}>{msg.message}</Box>
                    ) : null
                )
            }
        </Flex>
    )
}         


export default ChatArea;