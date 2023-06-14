import React, {useState} from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

import { ChatInput, ChatHeader, ChatArea } from '../Components';

interface mockState {
    
}

const ChatPage = () => {

    const [inputMessage, setInputMessage ]  = useState("");

    const handleSendMessage = (inputMessage: string) => {

    }
    return (
        <Flex flexDir="column">
            <ChatHeader />
            <ChatArea />
            <ChatInput setInputMessage={inputMessage} handleSendMessage={handleSendMessage} />
        </Flex>
    )
}

export default ChatPage;