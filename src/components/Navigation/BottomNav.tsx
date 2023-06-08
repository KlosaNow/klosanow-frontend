import { Box, Icon, Link, Text } from '@chakra-ui/react'
import { MdOutlineLibraryAdd, MdOutlineChat } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink as RouterLink } from "react-router-dom";

const navItems = [
  { title: "Home", icon: FiHome, link: "/home" },
  { title: "Create Lesson", icon: MdOutlineLibraryAdd, link: '/create-lesson' },
  { title: "Study Chat", icon: MdOutlineChat, link: "/" },
  { title: "Channel", icon: BiSearchAlt, link: "/" },

]
export default function BottomNav() {
  return (
    <Box
      pos="fixed"
      bottom="0"
      left="0"
      p='1rem'
      w="100%"
      bg='neutral.5'
    >
      <Box display='flex' justifyContent='space-around' alignItems='center'>

        {navItems.map((nav) => (
          <Link as={RouterLink} to={nav.link} key={nav.title}>

            <Box display='flex' flexDir='column' alignItems='center'>
            <Icon fontSize={25} as={nav.icon} />
            <Text fontSize='12px' textColor='black.50'>{nav.title}</Text>
          </Box>
          </Link>

        ))}


      </Box>
    </Box>
  )
}
