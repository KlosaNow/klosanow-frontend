import { Outlet } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import { Box, Icon } from '@chakra-ui/react'
import { BottomNav } from '../components/Navigation';

export default function CreateLessonLayout() {
    return (
        <Box p='1rem' minH="100vh">
            <Box height="auto">
                <Icon as={MdArrowBack} />

                <Outlet />

                <BottomNav />
            </Box>
        </Box>
    )
}
