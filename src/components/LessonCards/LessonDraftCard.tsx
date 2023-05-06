import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
export default function LessonDraftCard() {
    return (
        <Box display='flex' alignContent='center' border=' 0.5px solid #CCCCCC' h='90px'>

            <Image
                src='https://bit.ly/dan-abramov'
                borderRadius='md'
                p='0.2rem'
            />
            <Box ml='.5rem'>
                <Text fontSize='md' mt='1rem'>Biology 101</Text>
                <Text fontSize='xs' textColor='black.10'>This course is intended for the student interested in understanding common bi...</Text>
            </Box>
        </Box>
    )
}
