import { Box, HStack, PinInput, PinInputField, Text, Button } from '@chakra-ui/react'
export default function Otp(): JSX.Element {

    return (
        <Box py='2rem' px='1rem'>
            <Box display='flex' justifyContent='center' alignItems='center' mt='2.5rem'>
                <Box
                    position='absolute'
                    bgColor='rgba(123, 88, 244, 0.14)'
                    borderRadius='2xl'
                    p='2rem'
                    width='246px'
                    height='246px'
                    transform='rotate(-22.92deg)'

                ></Box>
                <Box
                    bgColor='primary.50'
                    borderRadius='2xl'
                    width='246px'
                    height='246px'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Text color='neutral.50' textAlign='center' fontSize='xl' fontWeight='bold' >OTP VERIFICATION</Text>
                </Box>
            </Box>
            <Box mt='4rem'>
                <Text textAlign='center' fontSize='sm' fontWeight='medium'>OTP has been sent to 08039309767</Text>
            </Box>

            <Box as='form' py='2rem'>
                <HStack display='flex' justifyContent='center'>
                    <PinInput size='lg' otp >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>


                <Box display='flex' justifyContent='center' mt='2rem'>
                    <Button width='100%' p='1.5rem' color='neutral.50' bgColor='primary.50'>Verify OTP</Button>
                </Box>
                <Text textAlign='center' fontSize='sm' color='secondary.50' mt='1rem'>00:30 Resend OTP</Text>
            </Box>


        </Box>
    )
}
