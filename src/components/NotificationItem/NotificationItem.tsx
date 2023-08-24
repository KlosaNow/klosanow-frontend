import { ListItem, Box, Text } from "@chakra-ui/react";
import "../../styles/Notifications.scss";

interface NotificationItemProps {
  name?: string;
  action: string;
  time: string;
  backgroundImageUrl: string;
}

const padding = "2em";
const justifyContent = "start";

export default function NotificationItem({  notificationItem,}: { notificationItem: NotificationItemProps;}) {
  return (
    <div>
      <ListItem p={padding}>
        <Box
          display="flex"
          justifyContent={justifyContent}
          alignItems="center"
          h="2em"
        >
          <div
            className="notification-image"
            style={{
              backgroundImage: `url(${notificationItem.backgroundImageUrl})`,
            }}
          ></div>
          <div className="notification-info">
            <Text>
              <span className="notification-info-name">
                {notificationItem.name}
              </span>
              {notificationItem.action}
            </Text>
            <Text fontSize="12px" fontWeight="400">
              {notificationItem.time}
            </Text>
          </div>
        </Box>
      </ListItem>

      <div className="list-line"></div>
    </div>
  );
}
