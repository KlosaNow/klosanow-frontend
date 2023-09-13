import { ListItem, Box, Text } from "@chakra-ui/react";
import "../../styles/Notifications.scss";
import { NotificationItemProps } from "../../types/components/componetInterface";

const padding = "2em";
const justifyContent = "start";

export default function NotificationItem({
  notificationItem,
}: {
  notificationItem: NotificationItemProps;
}) {
  return (
    <ListItem p="30px 0px 10px" borderBottom="0.5px solid rgb(201, 201, 201)">
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        height="auto"
      >
        <Box
          className="notification-image"
          style={{
            backgroundImage: `url(${notificationItem.backgroundImageUrl})`,
          }}
        ></Box>
        <Box className="notification-info">
          <Text>
            <span className="notification-info-name">
              {notificationItem.name}
            </span>
            {notificationItem.action}
          </Text>
          <Text fontSize="12px" fontWeight="400">
            {notificationItem.time}
          </Text>
        </Box>
      </Box>
    </ListItem>
  );
}
