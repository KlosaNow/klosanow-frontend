import React from 'react'
import { Box, Image, Text, Button } from '@chakra-ui/react'
import cardBg from "../../assets/cardBg.svg"

interface LessonCardProps {
    bgColor: string,
    buttonText: string,
    buttonTextColor: string,
    cardTitle: string,
    cardDesc: string,
    cardSrc: string

}

export default function CreateLessonCard({ bgColor, buttonText, buttonTextColor, cardDesc, cardTitle, cardSrc }: LessonCardProps): JSX.Element {
    return (
        <>
            <Box
                h="205px"
                borderRadius="xl"
                bg={bgColor}
                p='2rem'
                backgroundImage={cardBg}

            >
                <Image
                    boxSize='100px'
                    objectFit='cover'
                    src={cardSrc}
                    alt={cardTitle}
                    borderRadius='xl'
                    top='16' pos='absolute'
                />
                <Box display='flex' mt='3.5rem' justifyContent='space-between' alignContent='center' gap={2} >
                    <Box>
                        <Text fontSize='xl' textColor='neutral.5'>{cardTitle}</Text>
                        <Text fontSize='md' textColor='neutral.5'>
                            {cardDesc}
                        </Text>
                    </Box>

                    <Button mt='3rem' px='2rem' textColor={buttonTextColor} bgColor='neutral.5'>{buttonText}</Button>
                </Box>

            </Box>

        </>
    )
}
