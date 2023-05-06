import { Box, Center, Image, Flex, Icon, Text } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from "react-icons/ai";



export default function InfoPage(): JSX.Element {
    return (
        <Box backgroundColor='#D4D4D4' height="100vh" >
			
            <Flex alignItems="center" px="4" py="2" gap="2">
                <Icon as={AiOutlineArrowLeft} w="1.8rem" h="1.8rem" ml="3"  />
                <Text fontSize="2xl" >Info</Text>
            </Flex>
        </Box>
    )
}