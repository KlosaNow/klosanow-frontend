import { Box, Image, Flex, Text } from '@chakra-ui/react'
import SettingsItem from '../../components/SettingsItem/SettingsItem'
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
                        <Box background="neutral.10" marginTop="55" borderRadius="10" pt="2" pb="1">
                            <SettingsItem imageSrc={user } text="Info" />
                            <SettingsItem imageSrc={bell } text="Notification" />  
                        </Box>
                    </Flex>

                     <Flex justifyContent="flex-start" flexDirection="column" >
                        <Box  mt="10" background="neutral.10"  borderRadius="10" pt="3" pb="2">
                            <SettingsItem imageSrc={wallet} text="Subscription" />
                            <SettingsItem imageSrc={cloud } text="Storage" />
                        </Box>
                    </Flex>
            
                    <Flex justifyContent="flex-start" flexDirection="column" >
                        <Box mt="10" background="neutral.10"  borderRadius="10" pt="3" pb="2">
                            <SettingsItem imageSrc={help} text="Help" />
                            <SettingsItem imageSrc={group} text="Terms and Condition" />
                        </Box>
                    </Flex>

                    <Flex justifyContent="flex-start" flexDirection="column" >
                        <Box mt="10" background="neutral.10"  borderRadius="10" pt="3" pb="2">
                            <SettingsItem imageSrc={logout} text="Logout" />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>


    )
}