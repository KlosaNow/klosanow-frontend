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
import { BiBell } from "react-icons/bi";
import { Search } from "../../components/Search/Search";
import { BsChevronDown } from "react-icons/bs";
import {
  CreatedLessonSlide,
  SavedLessonSlide,
} from "../../components/LessonSliders";

import { Link } from "react-router-dom";
import { LessonCard } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HiUserCircle } from "react-icons/hi";
import testImg from "../../assets/images/testImg.svg";

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

const Dashboard: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log({ user });

  const [showLessons, setShowLessons] = useState<boolean>(true);

  return (
    <Box
      width="full"
      paddingX={1}
      height="full"
      margin={["auto", "0px"]}
      padding={["10px 10px 100px", "100px 30px 0"]}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        display={["flex", "none"]}
      >
        <HiUserCircle fontSize="70px" />
        <Link to="/notifications" style={{ position: "relative" }}>
          <BiBell fontSize={25} />
          <Text
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
          </Text>
        </Link>
      </Flex>
      <Text
        mr={2}
        fontSize="2xl"
        fontWeight="bold"
        fontFamily="inherit"
        color={["#D9927B", "#000"]}
      >
        Hello {user.data?.name},
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
        <Box display="flex" alignItems="center" gap="8">
          <LessonCard
            title="Animal Kingdom"
            thumbnail={testImg}
            duration="2:33"
          />
          <LessonCard
            title="Human Kingdom"
            thumbnail={testImg}
            duration="8:30"
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
          <Box display={["block", "none"]}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                bg="transparent"
                p={0}
              >
                {showLessons ? "Created Lessons" : "Saved Lessons"}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setShowLessons(true)} bg="transparent">
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
          {showLessons ? <CreatedLessonSlide /> : <SavedLessonSlide />}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
