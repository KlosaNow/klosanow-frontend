import { Box, Icon, Text } from '@chakra-ui/react'
import { MdOutlineLibraryAdd, MdOutlineChat, MdPersonOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const navItems = [
  { title: "Home", icon: AiOutlineHome },
  { title: "Create Lesson", icon: MdOutlineLibraryAdd },
  { title: "Study Chat", icon: MdOutlineChat },
  { title: "Profile", icon: MdPersonOutline },

]
export default function BottomNav() {
  return (
    <Box
      pos="absolute"
      bottom="0"
      left="0"
      borderTop='0.5px solid #CCCCCC'
      p='1rem'
      w="100%"
    >
      <Box display='flex' justifyContent='space-around' alignItems='center'>
        {navItems.map((nav) => (
          <Box display='flex' flexDir='column' alignItems='center' key='nav.title'>
            <Icon as={nav.icon} />
            <Text fontSize='sm' textColor='black.20'>{nav.title}</Text>
          </Box>
        ))}


      </Box>
    </Box>
  )
}
