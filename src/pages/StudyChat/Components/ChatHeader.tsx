import React from "react";
import { Flex, Link, IconButton, Text } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

import { Link as ReactRouterLink} from "react-router-dom";

interface headerProps {
    chatname: string;
}

const ChatHeader = ({chatname} :headerProps) => {
    return (
        <Flex position="fixed" top="0px" left="0px" right="0px" height="74px" bg="#F9F9F9" px="11px" py="16px" 
        justifyContent="space-between">
            <Flex justifyContent="center" alignItems="center" gap="8px">
                <Link as={ReactRouterLink} to="/studychat">
                <IconButton aria-label="Back"  border="none" bg="none" fontSize="16px" size="xs" icon={<MdArrowBack />}  />
                </Link>
                <Text fontSize={16} color="#D9927B">{chatname}</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" gap="8px">
                <IconButton aria-label="Search" width="16px" border="none" bg="none" fontSize="16px" size="xs" icon={<FiSearch />} />
                <IconButton aria-label="Menu"  border="none" bg="none" fontSize="16px" size="xs" icon={<FiMoreVertical />} />
            </Flex>
        </Flex>
    )
}

export default ChatHeader;