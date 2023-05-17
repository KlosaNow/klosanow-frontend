import { Box, Center, Image, Flex, Icon, Text } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from "react-icons/ai";
// import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
// import { IoCloudUploadOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
// import { BsShieldLock } from "react-icons/bs";
import avatar from '../../assets/SettingsPageImg/Avatar.png'
import group from '../../assets/SettingsPageImg/Group (1).png'
import cloud from '../../assets/SettingsPageImg/upload-cloud.png'
import user from '../../assets/SettingsPageImg/user.png'

export default function SettingsPage(): JSX.Element {
    return (
        <Box backgroundColor='neutral.60' height="100vh" >
			
            <Flex alignItems="center" px="4" py="2">
                <Icon as={AiOutlineArrowLeft} w="1.8rem" h="1.8rem" ml="3" />
            </Flex>
        
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
                <Box display="flex" alignItems="center" justifyContent="center" gap="10" w="93%">
                
                    <Image src={avatar} alt='lady' mt="3"/>
                
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
                                {/* <IoPersonOutline color="#7B58F4" size='2rem'/> */}
                                <Text>Info</Text>
                            </Box>
                            <Box display="flex" pl="3" pb="3" gap="7" alignItems="center">
                                <IoNotificationsOutline color="#7B58F4" size='30'/>
                                <Text>Notifications</Text>
                            </Box>
                        </Box>
                    </Flex>

                     <Flex justifyContent="flex-start" flexDirection="column" >
                        <Box  mt="10" background="neutral.10"  borderRadius="10" >
                                <Box display="flex" pt="3" pl="3" pb="3" gap="7" alignItems="center">
                                    <IoWalletOutline color="#7B58F4" size='30' display="inline" />
                                    <Text>Subscription</Text>
                                </Box>

                                <Box display="flex" pl="3" pb="3" gap="6" alignItems="center">
                                    <Image src={cloud } alt='cloud' w="2rem" h="2rem"/>
                                    {/* <IoCloudUploadOutline color="#7B58F4" size='2rem'/> */}
                                    <Text>Storage</Text>
                                </Box>
                        </Box>
                    </Flex>
                    

                    <Flex display="flex" justifyContent="flex-start" flexDirection="column" >
                        <Box mt="10" background="neutral.10"  borderRadius="10">
                            <Box display="flex" pt="3" pl="3" pb="3" gap="6" alignItems="center">
                                <IoHelpCircleOutline color="#7B58F4" size='35' />
                                <Text>Help</Text>
                            </Box>
                            <Box display="flex" pl="3" pb="3" gap="7" alignItems="center">
                                <Image src={group } alt='group' w="2rem" h="2rem"/>
                                {/* <BsShieldLock color="#7B58F4" size='2rem'/> */}
                                <Text>Terms and Conditions</Text>
                            </Box>
                        </Box>
                    </Flex>

                    <Box display="flex" mt="10" pt="3" pl="3" pb="3" background="neutral.10" gap="7" borderRadius="10" alignItems="center" >
                        <MdOutlineLogout color="#F30B0B" size='30' />
                        <Text>Logout</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>


    )
}