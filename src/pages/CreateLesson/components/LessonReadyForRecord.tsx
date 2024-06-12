import { Box, Container, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Overlay from './OverlayHighlighter';

export const LessonReadyForRecord = () => {
    const lessonDataString = localStorage.getItem("CREATE_LESSON_DATA");
  const lessonData = lessonDataString ? JSON.parse(lessonDataString) : null;
  
  console.log(lessonData);

    return (
            
        <Container maxW="container.lg" background='#F8F7FE' height="65vh" overflowY={'auto'} borderRadius={'20px'} scrollBehavior={'smooth'} sx={customScrollbarStyles} >
            <Stack my={8}>        
            <div dangerouslySetInnerHTML={{ __html: lessonData?.lessonContent }} />
            </Stack>
        </Container>
    //   </Box>
  )
}

export default LessonReadyForRecord

  const customScrollbarStyles = {
    '&::-webkit-scrollbar': {
      width: '4px',
      borderRadius: '16px',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '16px',
      WebkitBoxShadow: 'inset 0 0 6px #7B58F4',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '16px',
      backgroundColor: '#fff',
      //   outline: '1px solid slategrey', // You can include this line if needed
    },
  };