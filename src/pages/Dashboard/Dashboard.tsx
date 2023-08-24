import { FC, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Tabs,
  TabList,
  Tab,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import Img from "../../assets/images/notification_1.png";
import { BiBell } from "react-icons/bi";
import { Search } from "../../components/HomeComponents/Search";
import { BsChevronDown } from "react-icons/bs";
import CarouselComponent from "../../components/HomeComponents/CreatedLessons";
import { Link } from "react-router-dom";
import { LessonCard } from "../../components";
import SavedLessonsCarosal from "../../components/HomeComponents/SavedLessonCarosal";

const notifications = [
  {
    name: "Jessi Akpa",
    action: "added you to a group",
    time: "Just Now",
    id: 0,
  },
  {
    name: "Seun Daniel",
    action: "Purchased a course",
    time: "Just Now",
    id: 1,
  },
];

const HomePage: FC = () => {
  const [showLessons, setShowLessons] = useState<boolean>(true);

  

  return (
    <Box width="full" paddingX={1} height="full" margin={["auto", "0px"]}>
      <Flex
        justify={"space-between"}
        align={"center"}
        display={["flex", "none"]}
      >
        <img style={{ width: "70px", height: "70px" }} src={Img} alt="" />
        <Link to="/notifications" style={{ position: "relative" }}>
          <BiBell fontSize={25} />
          <span
            style={{
              display: "flex",
              position: "absolute",
              width: "15px",
              height: "15px",
              backgroundColor: "red",
              top: "0px",
              right: "0px",
              fontSize: "9px",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            {notifications.length}
          </span>
        </Link>
      </Flex>
      <Text
        fontSize={["20px", "32px"]}
        fontWeight="500"
        lineHeight={["30px", "20px"]}
        margin="0.5rem 0 1rem"
        color={["#D9927B", "#000"]}
      >
        Hello Oluseyi,
      </Text>
      <Text color="#000" display={["none", "block"]} marginBottom="20px">
        Your latest lesson is here
      </Text>
      <Box>
        <Box display={["block", "none"]}>
          <Search />
          <Text fontSize={12} fontWeight={600} mb={2}>
            Latest Created Lesson
          </Text>
        </Box>
        <Box display="flex" gap="20px" marginBottom="20px">
          <LessonCard
            title="Animal Kingdom"
            thumbnail="https://picsum.photos/200/300"
            duration="2:33"
          />
        </Box>

        <Box
          marginY={6}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          
        >
          <Box display={["none", "block"]} mb="25px">
            <Tabs width="full">
              <TabList gap="20px">
                <Tab onClick={() => setShowLessons(true)} padding="0px">
                  Created Lessons
                </Tab>
                <Tab onClick={() => setShowLessons(false)}>Saved Lessons</Tab>
              </TabList>
            </Tabs>
          </Box>
          <Box display={["block", "none"]} mb={5}>
            <Menu >
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                bg="transparent"
                p={0}
              >
                {showLessons ? "Created Lessons" : "Saved Lessons"}
              </MenuButton>
              <MenuList>
                <MenuItem 
                  onClick={() => setShowLessons(true)} 
                  bg="transparent">
                  Created Lessons
                </MenuItem>
                <MenuItem
                  onClick={() => setShowLessons(false)}
                  bg="transparent"
                >
                  Saved Lessons
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          {showLessons ? <CarouselComponent /> : <SavedLessonsCarosal />}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
