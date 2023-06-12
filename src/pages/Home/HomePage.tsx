import { FC } from "react";
import { Container, Box, Flex, Text } from "@chakra-ui/react";
import Img from "../../assets/images/notification_1.png";
import { BiBell } from "react-icons/bi";
import { Search } from "../../components/HomeComponent/Search";
import { HomeCard } from "../../components/HomeComponent/HomeCard";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import CarouselComponent from "../../components/HomeComponent/CarouselComponent";
import { Link } from "react-router-dom";

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
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      paddingX={1}
    >
      {" "}
      <Flex justify={"space-between"} align={"center"}>
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
      <h4
        style={{
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "30px",
          margin: "0.5rem 0 1rem",
          color: "#D9927B",
        }}
      >
        Hello, User.
      </h4>
      <Search />
      <Text fontSize={12} fontWeight={600} mb={2}>
        Latest Created Lesson
      </Text>
      <HomeCard />
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
    </MotionContainer>
  );
};

export default HomePage;
