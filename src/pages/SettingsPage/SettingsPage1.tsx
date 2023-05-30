import { Box, Image, Flex, Text } from '@chakra-ui/react'
import arrow from '../../assets/SettingsPageImg/Arrow-left.png'

import avatar from '../../assets/SettingsPageImg/Avatar.png'
import group from '../../assets/SettingsPageImg/Terms.png'
import cloud from '../../assets/SettingsPageImg/Upload.png'
import user from '../../assets/SettingsPageImg/User.png'
import bell from '../../assets/SettingsPageImg/Vector.png'
import wallet from '../../assets/SettingsPageImg/Wallet.png'
import help from '../../assets/SettingsPageImg/Help.png'
import logout from '../../assets/SettingsPageImg/Log-out.png'



export default function SettingsPage(): JSX.Element {
    return (
        <Box backgroundColor='neutral.60' height="100vh" width="100vw">
			
            <Flex alignItems="center" px="2" py="2">
                <Image src={arrow } alt='arrow' w="1.8rem" h="1.8rem"/>
            </Flex>
        
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
                <Box display="flex" alignItems="center" justifyContent="flex-start" gap="10">
                
                    <Image src={avatar} alt='lady' ml="9" mt="3" boxSize='20%'/>
                
                    <Flex flexDirection="column" >
                        <Text fontSize="xl">Olivia Rhye</Text>
                        <Text color="#667085" fontSize="xl">olivia@untitledui.com</Text>
                    </Flex>
                </Box>

                <Box w="93%" >
                
                    <Flex justifyContent="flex-start" flexDirection="column">
                        <Box background="neutral.10" marginTop="55" borderRadius="10" >
                            <Box display="flex" pt="3" pl="3" pb="3" gap="7" alignItems="center" >
                                <Image src={user } alt='user' w="1.8rem" h="1.8rem"/>
                                <Text>Info</Text>
                            </Box>
                            <Box display="flex" pl="3" pb="3" gap="7" alignItems="center">
                                <Image src={bell } alt='bell' w="1.8rem" h="1.8rem"/>
                                <Text>Notifications</Text>
                            </Box>
                        </Box>
                    </Flex>

                     <Flex justifyContent="flex-start" flexDirection="column" >
                        <Box  mt="10" background="neutral.10"  borderRadius="10" >
                                <Box display="flex" pt="3" pl="3" pb="3" gap="6" alignItems="center">
                                <Image src={wallet } alt='wallet' w="1.8rem" h="1.8rem"/> 
                                    <Text>Subscription</Text>
                                </Box>

                                <Box display="flex" pl="3" pb="3" gap="6" alignItems="center">
                                    <Image src={cloud } alt='cloud' w="1.8rem" h="1.8rem"/>
                                    <Text>Storage</Text>
                                </Box>
                        </Box>
                    </Flex>
            
                    <Flex display="flex" justifyContent="flex-start" flexDirection="column" >
                        <Box mt="10" background="neutral.10"  borderRadius="10">
                            <Box display="flex" pt="3" pl="3" pb="3" gap="6" alignItems="center">
                                <Image src={help } alt='help' w="1.8rem" h="1.8rem"/>
                                <Text>Help</Text>
                            </Box>
                            <Box display="flex" pl="3" pb="3" gap="6" alignItems="center">
                                <Image src={group } alt='group' w="1.8rem" h="1.8rem"/>
                                <Text>Terms and Conditions</Text>
                            </Box>
                        </Box>
                    </Flex>

                    <Box display="flex" mt="10" pt="3" pl="3" pb="3" background="neutral.10" gap="7" borderRadius="10" alignItems="center" >
                        <Image src={logout } alt='logout' w="1.8rem" h="1.8rem"/>
                        <Text>Logout</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>


    )
}