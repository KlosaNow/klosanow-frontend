import { Box, Center, Image } from '@chakra-ui/react'
import SplashImg from "../../assets/SplashScreenImg/SplashLogo.png"

export default function SplashScreen(): JSX.Element {
    return (
        <Box >
            <Center h='100vh'>
                <Image src={SplashImg} alt='klosanow logo' />
            </Center>
        </Box>
    )
}
