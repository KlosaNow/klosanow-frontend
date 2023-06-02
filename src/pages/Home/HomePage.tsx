import { FC } from "react";
import { Container, Box, Flex, List } from "@chakra-ui/react";
import { BottomNav } from "../../components/Navigation";
import Img from "../../assets/images/notification_1.png";
import Img2 from "../../assets/images/notification_2.png";
import Img3 from "../../assets/images/notification_3.png";
import { FiSettings } from "react-icons/fi";
import { HiBell } from "react-icons/hi";
import HomePageNotification from "../../components/NotificationItem/HomeNotification";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const notifications = [
  {
    name: "Jessi Akpa",
    action: "added you to a group",
    time: "Just Now",
    backgroundImageUrl: Img2,
    id:0
  },
  {
    name: "Seun Daniel",
    action: "Purchased a course",
    time: "Just Now",
    backgroundImageUrl: Img3,
    id:1
  },
];
const HomePage: FC = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <Container paddingX={10} paddingY={20}>
      <Flex justify={"space-between"} align={"center"}>
        <img src={Img} alt="" />
        <FiSettings fontSize={25} />
      </Flex>
      <h4
        style={{
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "30px",
          margin: "2rem 0 5rem",
          color: "#D9927B",
        }}
      >
        Hello, User.
      </h4>
      <Box>
        <Flex justify={"space-between"} align={"center"}>
          <h4 style={{ fontSize: "16px", fontWeight: "600" }}>Notifications</h4>
          <div style={{ position: "relative" }}>
            <HiBell fontSize={20} />
            <span
              style={{
                display: "flex",
                position: "absolute",
                width: "10px",
                height: "10px",
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
          </div>
        </Flex>
        <List paddingTop={1}>
          <HomePageNotification notificationItem={notifications[0]} />
          <HomePageNotification notificationItem={notifications[1]} />
        </List>
      </Box>
      <BottomNav />
    </Container>
  );
};

export default HomePage;
