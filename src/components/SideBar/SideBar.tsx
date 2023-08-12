<<<<<<< HEAD
import {
  Box,
  Text,
  Image,
  Button,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import logo from "../../assets/SplashScreenImg/SplashLogo.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavItem } from "./NavItem";
import { TbLogout } from "react-icons/tb";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdAppSettingsAlt } from "react-icons/md";
const Links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: AiFillHome,
  },
  {
    name: "Created Lessons",
    href: "/create-lesson",
    icon: MdAppSettingsAlt,
  },
  {
    name: "Study Chat",
    href: "/studychat",
    icon: BsFillChatTextFill,
  },
  {
    name: "Settings",
    href: "/Settings",
    icon: IoMdSettings,
  },
];
=======
import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { MdOutlineDashboard, MdPlayLesson } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
>>>>>>> b2fde632dc9c0b97f37a3731a21fba1c11e09c43
const SideBar = () => {
  const navigations = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <MdOutlineDashboard />,
    },
    {
      name: "Created Lessons",
      link: "/#",
      icon: <MdPlayLesson />,
    },
    {
      name: "Study Chat",
      link: "/lessons",
      icon: <IoChatbubbleOutline />,
    },
  ];
  return (
    <Box
      width="264px"
<<<<<<< HEAD
      borderRight="0.3px solid #C8C8C8"
      backgroundColor="#fff"
      position="fixed"
      height="full"
      zIndex="50"
      display={["none", "flex"]}
      flexDirection={"column"}
      justifyContent={"space-between"}
      py={"1rem"}
    >
      <Box paddingLeft="50px">
        <Box paddingRight={"30px"}>
          <Image src={logo} alt="Klosanaw logo" />
          <Text w="full" h={"0.05rem"} my={"2rem"} bg="#CCCCCC"></Text>
        </Box>

        <Box>
          {Links.map((link, i) => (
            <NavItem to={link.href} icon={link.icon} key={i}>
              {link.name}
            </NavItem>
          ))}
        </Box>
      </Box>
      <Box
        textAlign={"center"}
        marginX={"30px"}
        borderWidth={"1px"}
        borderColor={"#CCCCCC"}
        py={"20px"}
        px={"10px"}
        borderRadius={"0.5rem"}
        bg={"#FAFAFA"}
        cursor={"pointer"}
      >
        <Box>
          <CircularProgress
            value={30}
            size={"140px"}
            color="green.400"
            >
            <CircularProgressLabel fontSize={"0.9rem"} borderRadius={"3rem"}>
              Used <br /> 41Gb/1TB
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box w={"full"}>
          <Text>You are on Premium</Text>
          <Text color={"#808080"} fontSize={"15px"} my={"0.8rem"}>
            Expires june 29,2023
          </Text>
          <Button w={"full"} bg={"#7B58F4"} color={"white"}>
            Upgrade
          </Button>
        </Box>
      </Box>
      <Box paddingLeft="50px">
        <Box
          color={"red"}
          display={"flex"}
          alignItems={"center"}
          mb={"1.5rem"}
          justifyContent={"space-between"}
          w="full"
          cursor={"pointer"}
          textColor={"#808080"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Text mr={"0.5rem"}>
              <TbLogout />
            </Text>
            <Link to="/help" color="red">
              Help
            </Link>
          </Box>
        </Box>
        <Box
          color={"red"}
          fontWeight={600}
          display={"flex"}
          alignItems={"center"}
        >
          <Text mr={"0.5rem"}>
            <TbLogout />
          </Text>

          <Button color="red" variant="link">
            Logout
          </Button>
        </Box>
      </Box>
=======
      backgroundColor="#fff"
      color="#525256"
      position="fixed"
      height="full"
      zIndex="100"
      display={["none", "block"]}
      padding="30px 10px 30px 80px"
      boxShadow="lg"
    >
      <Image src={logo} width="125px" />

      <UnorderedList listStyleType="none" marginTop="50px">
        {navigations?.map((nav) => (
          <ListItem
            display="flex"
            alignItems="center"
            fontSize="16px"
            fontWeight="500"
            gap="10px"
            padding="10px 0px"
            margin="10px 0px"
            cursor="pointer"
            key={nav.name}
          >
            <Box fontSize="20px">{nav.icon}</Box>

            <Text>{nav.name}</Text>
          </ListItem>
        ))}
      </UnorderedList>
>>>>>>> b2fde632dc9c0b97f37a3731a21fba1c11e09c43
    </Box>
  );
};

export default SideBar;
