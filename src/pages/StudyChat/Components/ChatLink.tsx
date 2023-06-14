import React from 'react'
import { LinkBox, LinkOverlay, Box, Text, Avatar, Flex, Circle } from '@chakra-ui/react'

const MessageLink = ({ chatname, lastmsg, lastmsg_time, unread_messages }: { chatname: string, lastmsg: string, lastmsg_time: string, unread_messages: number }) => {
    return (
        <LinkBox width="100%" as="div">
            <LinkOverlay href="/study-chat/chatId">
            </LinkOverlay>
            <Box display="flex" alignItems="center" justifyContent="space-between" h="56px" w="auto" borderBottom="1px" borderBottomColor='#b1b1b1'>
                <Flex justifyContent="space-between" gap="8px">
                    <Avatar size="sm" />
                    <Flex alignItems="Circle" justifyContent="center" flexDir="column">
                        <Text fontSize="14px" fontWeight={500} color="#2A2A2A" lineHeight="17.5px">{chatname}</Text>
                        <Text fontSize="12px" fontWeight={400} color="#555555" lineHeight="15px">{lastmsg}</Text>
                    </Flex>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flexDir="column">
                    <Text fontSize={12} fontWeight={500} color="#555555" lineHeight="15px">{lastmsg_time}</Text>
                    <Circle size="20px" p={2} bg="#7B58F4" color="#FFFFF">
                        <Text fontSize={12} color="#FFFFFF">{unread_messages}</Text>
                    </Circle>
                </Flex>
            </Box >
        </LinkBox>
    )
}

export default MessageLink