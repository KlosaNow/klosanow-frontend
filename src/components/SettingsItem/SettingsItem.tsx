import { Box, Image, Text } from '@chakra-ui/react'

interface props {
    imageSrc: string
    text: string
}

const SettingsItem = ({imageSrc, text}: props) => {
    return (
        <Box display="flex" pb="2" pl="3" gap="6" alignItems="center" >
            <Image src={imageSrc} alt='user' w="1.8rem" h="1.8rem" />
            <Text>{text}</Text>
        </Box>
    )
}


export default SettingsItem;