import React from "react";
import { Flex, Box, Icon, Text } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

const ChatHeader = () => {
    return (
        <Flex position="fixed" top="0px" left="0px" right="0px" height="74px" bg="#F9F9F9" px="11px" py="16px" 
        justifyContent="space-between">
            <Flex justifyContent="center" alignItems="center" gap="8px">
                <Icon as={MdArrowBack}  />
                <Text fontSize={16} color="#D9927B">Shola</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" gap="8px">
            <Icon as={FiSearch} boxSize={5} />
          <Icon as={FiMoreVertical} boxSize={5} />
            </Flex>
        </Flex>
    )
}

export default ChatHeader;