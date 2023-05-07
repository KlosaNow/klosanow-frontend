import { Outlet } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import { Box, Icon } from '@chakra-ui/react'
import { BottomNav } from '../Navigation';

export default function CreateLessonLayout() {
    return (
        <Box p='1rem' minH="100vh">
            <Box height="auto">
                <Box
                    pos="fixed"
                    top='0'
                    bg='#fff'
                    w='100%'
                    h='40px'
                    zIndex='1'
                >
                    <Icon mt='1rem' as={MdArrowBack} />
                </Box>
                <Outlet />
                <BottomNav />
            </Box>
        </Box>
    )
}
