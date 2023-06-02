import { ListItem, Box, Text } from "@chakra-ui/react";
import "../../styles/Notifications.scss";
import {BiTimeFive} from 'react-icons/bi'
import {RiMoreLine} from 'react-icons/ri'
import { Link } from "react-router-dom";

interface NotificationItemProps {
  name?: string;
  action: string;
  time: string;
  backgroundImageUrl: string;
  id:number
}

const padding = "1em 0";
const justifyContent = "space-between";

export default function NotificationItem({
    notificationItem
  }: {
    notificationItem: NotificationItemProps;
  }) {
  return (
    <div>
      <ListItem p={padding} key={notificationItem.id}>
        <Link to='/notification'>
        <Box
          display="flex"
          justifyContent={justifyContent}
          alignItems="center"
          h="1em"
        >
        <Box
          display="flex"
          justifyContent="canter"
          alignItems="center"
          gap={1}>
          <img style={{width:'35px',height:"35px"}} src={notificationItem.backgroundImageUrl} alt=""/>
          <div className="notification-info">
            <Text fontSize={12}>
              <span className="notification-info-name">
                {notificationItem.name}
              </span>
              {" "}{notificationItem.action}
            </Text>
            <Text display={"inline-flex"} gap={1} alignItems='center' fontSize="12px" fontWeight="400">
              <BiTimeFive/>{notificationItem.time}
            </Text>
          </div>
          </Box>
          <RiMoreLine/>
        </Box>
        </Link>
      </ListItem>
    </div>
  );
}
