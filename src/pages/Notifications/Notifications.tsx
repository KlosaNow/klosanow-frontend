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

export const sampleNotifications = [
  {
    name: "Jessi Akpa",
    action: "added you to a group",
    time: "Just Now",
    backgroundImageUrl: backgroundImage1,
    isRead: false,
  },
  {
    name: "Seun Daniel",
    action: "added you to a group",
    time: "Just Now",
    backgroundImageUrl: backgroundImage2,
    isRead: false,
  },
  {
    name: "",
    action: "You subscribed to the basic plan",
    time: "3 days ago",
    backgroundImageUrl: backgroundImage3,
    isRead: true,
  },
  {
    name: "Timi Crown",
    action: "added you to a group",
    time: "4 days ago",
    backgroundImageUrl: backgroundImage4,
    isRead: false,
  },
  {
    name: "",
    action: "You changed your password",
    time: "5 days ago",
    backgroundImageUrl: backgroundImage5,
    isRead: true,
  },
  {
    name: "Idowu Taiwo",
    action: "added you to a group",
    time: "5 days ago",
    backgroundImageUrl: backgroundImage6,
    isRead: false,
  },
];

export default function Notifications() {
  return (
    <Box>
      <Header pageName="Notification" />
      <Box>
        <List>
          {sampleNotifications.map((notificationItem, index) => (
            <NotificationItem key={index} notificationItem={notificationItem} />
          ))}
        </List>
      </Box>
    </Box>
  );
}
