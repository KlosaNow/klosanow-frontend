import { Box, Icon, Link, Text } from "@chakra-ui/react";
import {
  MdOutlineLibraryAdd,
  MdOutlineChat,
  MdPersonOutline,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink as RouterLink } from "react-router-dom";
import { studyChatPagePath } from "../../data/pageUrl";

const navItems = [
  { title: "Home", icon: AiOutlineHome, link: "/dashboard" },
  {
    title: "Create Lesson",
    icon: MdOutlineLibraryAdd,
    link: "/drafts",
  },
  { title: "Study Chat", icon: MdOutlineChat, link: studyChatPagePath },
  { title: "Profile", icon: MdPersonOutline, link: "/settings" },
];
export default function BottomNav() {
  return (
    <Box
      pos="fixed"
      bottom="0"
      left="0"
      right="0"
      p="1rem"
      w="100%"
      bg="neutral.5"
      display={["block", "none"]}
    >
      <Box display="flex" justifyContent="space-around" alignItems="center">
        {navItems.map((nav) => (
          <Link as={RouterLink} to={nav.link} key={nav.title}>
            <Box display="flex" flexDir="column" alignItems="center">
              <Icon fontSize={25} as={nav.icon} />
              <Text fontSize="12px" textColor="black.50">
                {nav.title}
              </Text>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
