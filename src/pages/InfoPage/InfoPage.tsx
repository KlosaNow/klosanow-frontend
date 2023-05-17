import { Box, Center, Image, Button, NumberInput, Flex, Icon, Text, Input } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'



export default function InfoPage(): JSX.Element {
    return (
        <Box backgroundColor='#D4D4D4' height="100vh" >
			
            <Flex alignItems="center" px="4" py="2" gap="2">
                <Icon as={AiOutlineArrowLeft} w="1.8rem" h="1.8rem" ml="3"  />
                <Text fontSize="2xl" >Info</Text>
            </Flex>

            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder='Oluwatosin' />
            </FormControl>

            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder='Olasina' />
            </FormControl>

            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='oluwatosinolasina@gmail.com' />
            </FormControl>

            <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <NumberInput max={50} min={10}></NumberInput>
                <Input type='number' placeholder='07039301831' max={11} />
            </FormControl>

            <Flex>
                <Button colorScheme='messenger'>Messenger</Button>
            </Flex>

        </Box>
    )
}