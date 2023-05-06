import { Box, Image, Text, Button, Link } from '@chakra-ui/react'
import { NavLink as RouterLink } from "react-router-dom";
import cardBg from "../../assets/cardBg.svg"

interface LessonCardProps {
    bgColor: string,
    buttonText: string,
    buttonTextColor: string,
    cardTitle: string,
    cardDesc: string,
    cardSrc: string,
    buttonLink?: string
}


export default function CreateLessonCard({
    bgColor,
    buttonText,
    buttonTextColor,
    cardDesc,
    cardTitle,
    cardSrc,
    buttonLink
}: LessonCardProps): JSX.Element {
    return (
        <>
            <Box
                h="205px"
                borderRadius="xl"
                bg={bgColor}
                p='2rem'
                backgroundImage={cardBg}
                mt='1.5rem'
                mb='4.5rem'
            >
                <Image
                    boxSize='100px'
                    objectFit='cover'
                    src={cardSrc}
                    alt={cardTitle}
                    borderRadius='xl'
                    marginTop='-70px'
                />
                <Box display='flex' mt='1.5rem' justifyContent='space-between' alignContent='center' gap={2} >
                    <Box>
                        <Text fontSize='xl' textColor='neutral.5'>{cardTitle}</Text>
                        <Text fontSize='md' textColor='neutral.5'>
                            {cardDesc}
                        </Text>
                    </Box>
                    <Button mt='3rem' px='2rem' textColor={buttonTextColor} bgColor='neutral.5'>
                        <Link as={RouterLink} to={buttonLink} >
                            {buttonText}
                        </Link>
                    </Button>
                </Box>
            </Box>
        </>
    )
}
