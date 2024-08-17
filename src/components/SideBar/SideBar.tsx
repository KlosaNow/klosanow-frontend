import { Box, Text, Image, Button } from "@chakra-ui/react";
import logo from "../../assets/SplashScreenImg/SplashLogo.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavItem } from "./NavItem";
import { TbLogout } from "react-icons/tb";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdAppSettingsAlt } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import {
  allLessonsPagePath,
  createLessonPagePath,
  dashboardPagePath,
} from "src/data/pageUrl";
import { uniqueId } from "lodash";
import { DEVICE_SCREEN_SIZES } from "src/data/constants";
import React from "react";

const getNavLinks = (isDesktop: boolean) => [
  {
    name: "Dashboard",
    href: dashboardPagePath,
    icon: AiFillHome,
    isVisible: true,
  },
  {
    name: "Create Lessons",
    href: createLessonPagePath,
    icon: MdAppSettingsAlt,
    isVisible: !isDesktop,
  },
  {
    name: "Lessons",
    href: allLessonsPagePath,
    icon: MdAppSettingsAlt,
    isVisible: isDesktop,
  },
  {
    name: "Study Chat",
    href: "/studychat",
    icon: BsFillChatTextFill,
    isVisible: true,
  },
  {
    name: "Settings",
    href: "/Settings",
    icon: IoMdSettings,
    isVisible: true,
  },
];

const SideBar: React.FC = () => {
  const [isDesktop, setIsDesktop] = React.useState(
    window.innerWidth <= DEVICE_SCREEN_SIZES.laptop_sm
  );

  const Links = getNavLinks(isDesktop);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth < DEVICE_SCREEN_SIZES.laptop_sm);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      width="264px"
      borderRight="0.3px solid #C8C8C8"
      backgroundColor="#fff"
      position="fixed"
      height="100%"
      zIndex="50"
      display={["none", "flex"]}
      flexDirection={"column"}
      justifyContent={"space-between"}
      py={"2rem"}
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box paddingLeft="50px">
        <Box paddingRight={"30px"}>
          <Image src={logo} alt="Klosanaw logo" width="120px" margin="auto" />
          <Box w="full" h={"0.05rem"} my={"2rem"} bg="#CCCCCC" />
        </Box>

        <Box>
          {Links.map((link, i) => {
            return (
              link.isVisible && (
                <NavItem
                  to={link.href}
                  icon={link.icon}
                  key={uniqueId(`nav-link-${i}`)}
                >
                  {link.name}
                </NavItem>
              )
            );
          })}
        </Box>
      </Box>

      <Box paddingLeft="50px" marginBottom="80px">
        <Box
          color={"red"}
          display={"flex"}
          alignItems={"center"}
          mb={"2rem"}
          cursor={"pointer"}
          textColor={"#808080"}
        >
          <Text mr={"0.5rem"} fontSize={"1.4rem"}>
            <IoMdHelpCircle />
          </Text>
          <Link to="/help" color="red">
            Help
          </Link>
        </Box>
        <Box color={"red"} display={"flex"} alignItems={"center"}>
          <Button color="red" variant="link" fontWeight="500">
            <Box mr={"0.5rem"}>
              <TbLogout />
            </Box>
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
