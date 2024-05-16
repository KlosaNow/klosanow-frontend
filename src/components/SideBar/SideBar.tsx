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
import { IoMdHelpCircle } from "react-icons/io";
const Links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: AiFillHome,
  },
  {
    name: "Created Lessons",
    href: "/created-lessons",
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
          {Links.map((link, i) => (
            <NavItem to={link.href} icon={link.icon} key={i}>
              {link.name}
            </NavItem>
          ))}
        </Box>
      </Box>
      {/* <Box
        textAlign={"center"}
        marginX={"30px"}
        borderWidth={"1px"}
        borderColor={"#CCCCCC"}
        py={"20px"}
        px={"10px"}
        borderRadius={"0.5rem"}
        bg={"#FAFAFA"}
        marginY="70px"
      >
        <Box>
          <CircularProgress value={30} size={"140px"} color="green.400">
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
      </Box> */}
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
