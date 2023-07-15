import React, {useState} from "react";
import { Flex, Box, Icon, Link, IconButton, Text } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

import { Link as ReactRouterLink} from "react-router-dom";

import { MuteIcon, ArchiveIcon, BlockUser, InfoIcon, SearchIcon, MenuIcon, BackIcon } from "./Icons";

interface headerProps {
    chatname: string;
}

const ChatHeader = ({chatname} :headerProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsVisible(!isVisible)
    }

    const ChatMenu = () => {
        return (
            <Box display={isVisible ? "flex" : "none"} pos="absolute" 
                boxShadow="0px 4px 4px rgba(25, 18, 49, 0.12)"
                borderRadius="4px" bg="#fff" padding={"0px 8px"}
                top="60px" right="11px"
                height={"97px"} width={"100px"}
            >
                <Flex 
                    flexDir={"column"} boxSizing="border-box"
                    justifyContent={"center"} alignItems={"flex-start"} 
                    
                >
                    <Flex 
                        borderBottom="0.5px solid #CCCCCC"
                        width="84px" height="23px"
                        alignSelf="stretch" alignItems="flex-start"
                        padding="4px 10px" gap="4px"
                    >
                        <Icon as={InfoIcon} />
                        <Text color="#555555" fontSize="12px" fontWeight="400"
                            lineHeight="15px"
                        >
                            Info
                        </Text>
                    </Flex>
                    <Flex 
                        borderBottom="0.5px solid #CCCCCC"
                        width="84px" height="23px"
                        alignSelf="stretch" alignItems="flex-start"
                        padding="4px 10px" gap="4px"
                    >
                        <Icon as={ArchiveIcon} />
                        <Text color="#555555" fontSize="12px" fontWeight="400"
                            lineHeight="15px"
                        >
                            Archive
                        </Text>
                    </Flex>
                    <Flex 
                        borderBottom="0.5px solid #CCCCCC"
                        width="84px" height="23px"
                        alignSelf="stretch" alignItems="flex-start"
                        padding="4px 10px" gap="4px"
                    >
                        <Icon as={MuteIcon}/>
                        <Text color="#555555" fontSize="12px" fontWeight="400"
                            lineHeight="15px"
                        >
                            Mute
                        </Text>
                    </Flex>
                    <Flex
                        width="84px" height="23px"
                        alignSelf="stretch" alignItems="flex-start"
                        padding="4px 10px" gap="4px"
                    >
                        <Icon as={BlockUser} />
                        <Text color="#555555" fontSize="12px" fontWeight="400"
                            lineHeight="15px"
                        >
                            Block
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        )
    }

    return (
        <Flex position="fixed" top="0px" left="0px" right="0px" height="74px" bg="#F9F9F9" padding="16px 11px" 
        justifyContent="space-between">
            <Flex justifyContent="center" alignItems="center" gap="8px">
                <Link as={ReactRouterLink} to="/studychat">
                    <IconButton aria-label="Back"  border="none" bg="none" fontSize="16px" size="xs" icon={<BackIcon />}  />
                </Link>
                <Text fontSize={16} color="#D9927B">{chatname}</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" gap="8px">
                <IconButton aria-label="Search" width="16px" border="none" bg="none" fontSize="16px" size="xs" icon={<SearchIcon /> } />
                <IconButton aria-label="Menu" onClick={toggleMenu}  border="none" bg="none" fontSize="16px" size="xs" icon={<MenuIcon />} />
                <ChatMenu />
            </Flex>
        </Flex>
    )
}

export default ChatHeader;