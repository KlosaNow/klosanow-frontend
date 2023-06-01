import { Box, Center, Image, Flex, Text} from '@chakra-ui/react'
import { FormControl, FormLabel, Input, Stack, Button } from '@chakra-ui/react'
import arrow from '../../assets/SettingsPageImg/Arrow-left.png'

export default function InfoPage(): JSX.Element {
        return (
            <Box height="100vh" >
			
                <Flex alignItems="center" px="2" py="2" gap="1">
                    <Image src={arrow} alt='arrow' w="1.8rem" h="1.8rem" />
                    <Text fontSize="xl" color='black.40' >Info</Text>
                </Flex>

            
                <Stack spacing={2}>
                    <FormControl px="8">
                        <FormLabel pt="5" color="black.30">First Name</FormLabel>
                        <Input id="nameInput" height='42px' width='359px' focusBorderColor='primary.50' placeholder='Oluwatosin' _placeholder={{ opacity: 0.5, color: 'black.30' }} size='md' />
                    </FormControl>

                    <FormControl px="8">
                        <FormLabel pt="3" color="black.30">Last Name</FormLabel>
                        <Input height='42px' width='359px' focusBorderColor='primary.50' placeholder='Olasina' _placeholder={{ opacity: 0.5, color: 'black.30' }} size='md' />
                    </FormControl>

                    <FormControl px="8">
                        <FormLabel pt="3" color="black.30">Email </FormLabel>
                        <Input id="emailInput" type='email' height='42px' width='359px' focusBorderColor='primary.50' placeholder='oluwatosinolasina@gmail.com' _placeholder={{ opacity: 0.5, color: 'black.30' }} size='md' />
                    </FormControl>

                    <FormControl px="8" pb="10">
                        <FormLabel pt="3" color="black.30">Phone Number</FormLabel>
                        <Input type='number' height='42px' width='359px' focusBorderColor='primary.50' placeholder='07039301831' _placeholder={{ opacity: 0.5, color: 'black.30' }} max={11} size='md' />
                    </FormControl>
                    
                        <Flex justifyContent='center'>
                            <Button height='55px' width='359px' backgroundColor="primary.50" color="neutral.10">Edit Account</Button>
                        </Flex>
                </Stack>

            </Box>
        )
}