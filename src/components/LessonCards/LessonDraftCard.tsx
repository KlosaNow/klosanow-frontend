import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

interface LessonDraftProp {
    draftSrc: string,
    draftTitle: string,
    draftDescription: string

}
export default function LessonDraftCard({ draftSrc, draftTitle, draftDescription }: LessonDraftProp): JSX.Element {
    return (
        <Box display='flex' alignContent='center' mb='1rem' border=' 0.5px solid #CCCCCC' h='90px' borderRadius='sm'>

            <Image
                src={draftSrc}
                borderRadius='md'
                p='0.2rem'
            />
            <Box ml='.5rem'>
                <Text fontSize='md' mt='.5rem'>{draftTitle}</Text>
                <Text fontSize='xs' textColor='black.10'>{draftDescription}</Text>
            </Box>
        </Box>
    )
}
