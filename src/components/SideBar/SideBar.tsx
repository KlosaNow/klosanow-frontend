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
import {IoMdHelpCircle} from "react-icons/io"
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
const SideBar = () => {
  return (
    <Box
      width="264px"
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
          <CircularProgress value={30} size={"140px"} color="green.400" >
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
            <Text mr={"0.5rem"} color={"#808080"} fontSize={"1.4rem"}>
              <IoMdHelpCircle />
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
    </Box>
  );
};

export default SideBar;
