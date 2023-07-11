import {FC} from 'react'
import { Container, Box, Text } from "@chakra-ui/react";
import img from "../../assets/images/dummyImg.png";
export const HomeCard:FC = () => {
  return (
    <Container pos="relative" padding={0} borderRadius={5} overflow="hidden" width="100%" height="181px">
        <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={img} alt="" />
        <Box padding={2} width="95%" bottom="1rem" pos="absolute" display="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize={16} color="#fff">Lesson Title</Text>
            <Text fontSize={12} background="#000" paddingY={1} paddingX={4} borderRadius={15}color="#fff">2:28</Text>
        </Box>
    </Container>
  )
}
