import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

import { ChatInput, ChatHeader, ChatArea } from '../Components';



const ChatPage = () => {
    return (
        <Flex flexDir="column">
            <ChatHeader />
            <ChatArea />
            <ChatInput />
        </Flex>
    )
}

export default ChatPage;