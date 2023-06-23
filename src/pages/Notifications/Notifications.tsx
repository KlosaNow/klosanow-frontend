import { Box, List } from "@chakra-ui/react";
import "../../styles/Notifications.scss";
import backgroundImage1 from "../../assets/images/notification_1.png";
import backgroundImage2 from "../../assets/images/notification_2.png";
import backgroundImage3 from "../../assets/images/notification_3.png";
import backgroundImage4 from "../../assets/images/notification_4.png";
import backgroundImage5 from "../../assets/images/notification_5.png";
import backgroundImage6 from "../../assets/images/notification_6.png";
import NotificationItem from "../../components/NotificationItem/NotificationItem";
import Header from "../../components/Header/Header";

const notifications = [
  {
    name: "Jessi Akpa",
    action: "added you to a group",
    time: "Just Now",
    backgroundImageUrl: backgroundImage1,
  },
  {
    name: "Seun Daniel",
    action: "added you to a group",
    time: "Just Now",
    backgroundImageUrl: backgroundImage2,
  },
  {
    name: "",
    action: "You subscribed to the basic plan",
    time: "3 days ago",
    backgroundImageUrl: backgroundImage3,
  },
  {
    name: "Timi Crown",
    action: "added you to a group",
    time: "4 days ago",
    backgroundImageUrl: backgroundImage4,
  },
  {
    name: "",
    action: "You changed your password",
    time: "5 days ago",
    backgroundImageUrl: backgroundImage5,
  },
  {
    name: "Idowu Taiwo",
    action: "added you to a group",
    time: "5 days ago",
    backgroundImageUrl: backgroundImage6,
  },
];

export default function Notifications() {
  return (
    <Box>
      <Header pageName="Notification" />
      <Box>
        <List>
          {notifications.map((notificationItem, index) => (
            <NotificationItem key={index} notificationItem={notificationItem} />
          ))}
        </List>
      </Box>
    </Box>
  );
}
