import { Box, Icon, Link, Text } from "@chakra-ui/react";
import {
  MdOutlineLibraryAdd,
  MdOutlineChat,
  MdPersonOutline,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink as RouterLink } from "react-router-dom";
import {
  allLessonsPagePath,
  dashboardPagePath,
  studyChatPagePath,
} from "src/data/pageUrl";

interface BottomNavProps {
  actions?: {
    handleClickStudyChat: () => void;
  };
}

const getNavItems = (actions?: { handleClickStudyChat: () => void }) => [
  { title: "Home", icon: AiOutlineHome, link: dashboardPagePath },
  {
    title: "Lessons",
    icon: MdOutlineLibraryAdd,
    link: allLessonsPagePath,
  },
  {
    title: "Study Chat",
    icon: MdOutlineChat,
    link: studyChatPagePath,
    action: () =>
      actions?.handleClickStudyChat && actions.handleClickStudyChat(),
  },
  { title: "Profile", icon: MdPersonOutline, link: "/settings" },
];

const BottomNav: React.FC<BottomNavProps> = ({ actions }) => {
  const navItems = getNavItems(actions);

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
            <Box
              display="flex"
              flexDir="column"
              alignItems="center"
              onClick={() => nav?.action && nav.action()}
            >
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
};

export default BottomNav;
