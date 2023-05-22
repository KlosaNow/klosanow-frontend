import { useState } from "react"
import { Box, Text, FormControl, FormLabel, Input, Button, Link } from "@chakra-ui/react"
import { Link as RouteLink } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default function SignUp(): JSX.Element {
    const [phone, setPhone] = useState<string | undefined>()
    return (
        <Box py='2rem' px='1rem' >
            <Box>
                <Text color='secondary.50' fontSize='2xl'>Welcome to easy learning</Text>
                <Text fontSize='sm' color='black.40'>Let’s get you signed up</Text>
            </Box>
            <Box as='form' py='2rem'>
                <FormControl mb='1.5rem'>
                    <FormLabel fontSize='sm' color='black.40'>Username</FormLabel>
                    <Input type='text' fontSize='sm' placeholder='Enter Username' />
                </FormControl>

                <FormControl mb='1.5rem'>
                    <FormLabel fontSize='sm' color='black.40'>Email</FormLabel>
                    <Input type='text' fontSize='sm' placeholder='Enter your Email Address' />
                </FormControl>

                <FormControl mb='1.5rem'>
                    <FormLabel fontSize='sm' color='black.40'>Phone Number </FormLabel>
                    <PhoneInput
                        country={'ng'}
                        regions={['africa']}
                        containerClass={'10px'}
                        inputStyle={{ width: '100%', height: '2.5rem', outline: '2px solid transparent' }}
                        value={phone}
                        onChange={phone => setPhone(phone)}
                    />
                </FormControl>

                <Box display='flex' justifyContent='center'>
                    <Button width='100%' p='1.5rem' color='neutral.50' bgColor='primary.50'>Sign up</Button>
                </Box>
                <Box mt='1rem'>
                    <Text textAlign='center'>Already have an account? {' '}
                        <Link as={RouteLink} to="/sign-in" color='primary.50'>Sign in</Link>
                    </Text>
                </Box>


            </Box>
        </Box>
    )
}
