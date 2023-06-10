import { Box, Icon, Link, Text } from '@chakra-ui/react'
import { MdOutlineLibraryAdd, MdOutlineChat, MdPersonOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink as RouterLink } from "react-router-dom";

const navItems = [
  { title: "Home", icon: AiOutlineHome, link: "/" },
  { title: "Create Lesson", icon: MdOutlineLibraryAdd, link: '/create-lesson' },
  { title: "Study Chat", icon: MdOutlineChat, link: "/study-chat" },
  { title: "Profile", icon: MdPersonOutline, link: "/" },

]
export default function BottomNav() {
  return (
    <Box
      pos="fixed"
      bottom="0"
      left="0"
      borderTop='0.5px solid #CCCCCC'
      p='1rem'
      w="100%"
      bg='neutral.5'
    >
      <Box display='flex' justifyContent='space-around' alignItems='center'>

        {navItems.map((nav) => (
          <Link as={RouterLink} to={nav.link} key='nav.title'>

            <Box display='flex' flexDir='column' alignItems='center'>
            <Icon as={nav.icon} />
            <Text fontSize='sm' textColor='black.20'>{nav.title}</Text>
          </Box>
          </Link>

        ))}


      </Box>
    </Box>
  )
}
