import { Box, Text } from '@chakra-ui/react'
import { CreateLessonCard } from '../../components/LessonCards'
import { templateData } from './lessonData'

export default function LessonTemplate() {
    return (
        <Box>
            <Box py='2rem'>
                <Text fontSize='md' textColor='primary.50'>Choose a Template</Text>
            </Box>
            <Box>
                {templateData.map((template) => (
                    <CreateLessonCard

                        key={template.cardTitle}
                        bgColor={template.bgColor}
                        buttonText={template.buttonText}
                        buttonTextColor={template.buttonTextColor}
                        cardTitle={template.cardTitle}
                        cardDesc={template.desc}
                        cardSrc={template.cardSrc} />

                ))}
            </Box>
        </Box>
    )
}
