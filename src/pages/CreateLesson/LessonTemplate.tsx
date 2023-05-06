import { Box, Text } from '@chakra-ui/react'
import { CreateLessonCard } from '../../components/LessonCards'

const templateData = [
    {
        bgColor: '#7B58F4',
        buttonText: 'Use template',
        buttonTextColor: '#523BA3',
        cardTitle: 'Slides',
        desc: 'Present your lesson in bite size sections for your students',
        cardSrc: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        bgColor: '#916152',
        buttonText: 'Use template',
        buttonTextColor: '#916152',
        cardTitle: 'Unending Scroll',
        desc: 'Present your lesson in bite size sections for your students',
        cardSrc: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
    },


]
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
