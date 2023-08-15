import { FC } from "react";

import {
  Container,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";

import Img from "../../assets/images/notification_1.png";
import { BiBell } from "react-icons/bi";
import { Search } from "../../components/HomeComponents/Search";
import { HomeCard } from "../../components/HomeComponents/HomeCard";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import Notifications from "../Notifications";
import CarouselComponent from "../../components/HomeComponents/Carousel";
import { Link } from "react-router-dom";
import DesktopView from "./components/DesktopView";
import { LessonCard } from "../../components";

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
const MotionContainer = motion(Container);

const HomePage: FC = () => {
  return (
    <>
      <MotionContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        paddingX={1}
        position="relative"
      >
        <Flex justify={"space-between"} align={"center"}>
          <Box width="full" paddingX={1} margin={["auto", "0px"]}>
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
              <Box display="flex" gap="20px" marginBottom="30px">
                <LessonCard
                  title="Animal Kingdom"
                  thumbnail="https://picsum.photos/200/300"
                  duration="2:33"
                />
              </Box>

              <Box display={["none", "block"]}>
                <Tabs width="full">
                  <TabList gap="20px">
                    <Tab padding="0px">Created Lessons</Tab>
                    <Tab>Saved Lessons</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                      <p>two!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>

              <Box
                marginY={6}
                display="flex"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" gap={1} alignItems="center">
                  <Text fontSize={12} fontWeight={600}>
                    Created Lesson
                  </Text>
                  <BsChevronDown />
                </Box>
                <Text fontSize={12} fontWeight={600}>
                  See All
                </Text>
              </Box>
              <CarouselComponent />
            </Box>
          </Box>
        </Flex>
      </MotionContainer>
    </>
  );
};

export default HomePage;
