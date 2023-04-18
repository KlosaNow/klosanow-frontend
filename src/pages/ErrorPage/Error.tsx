import { Box, Text } from '@chakra-ui/react'

export default function Error() {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' h='100vh'>
            <Text fontSize='3xl' color='primary.70' text-bold>Error page</Text>
        </Box>
    )
}
