import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { MdOutlineDashboard, MdPlayLesson } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
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
          >
            <Box fontSize="20px">{nav.icon}</Box>

            <Text>{nav.name}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default SideBar;
