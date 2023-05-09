import React from 'react'
import { Box, Text, Image, Flex, Circle } from '@chakra-ui/react'

const ChatDisplay = ({ chatname, lastmsg, lastmsg_time, unread_messages }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" h="56px" w="391px" borderBottom="1px" borderBottomColor='#b1b1b1'>
            <Flex justifyContent="space-between" gap="8px">
                <Circle size="40px" bg="#b1b1b1">
                    <Image />
                </Circle>
                <Flex alignItems="Circle" justifyContent="center" flexDir="column">
                    <Text fontSize={14} fontWeight={600} color="#2A2A2A" lineHeight="17.5px">{chatname}</Text>
                    <Text fontSize={12} fontWeight={400} color="#555555" lineHeight="15px">{lastmsg}</Text>
                </Flex>
            </Flex>
            <Flex alignItems="center" justifyContent="center" flexDir="column">
                <Text fontSize={12} fontWeight={400} color="#555555" lineHeight="15px">{lastmsg_time}</Text>
                <Circle size="20px" p={2} bg="#7B58F4" color="#FFFFF">
                    <Text fontSize={12} color="#FFFFFF">{unread_messages}</Text>
                </Circle>
            </Flex>
        </Box >
    )
}

export default ChatDisplay