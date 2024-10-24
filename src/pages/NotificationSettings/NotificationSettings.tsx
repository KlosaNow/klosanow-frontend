import { Box } from "@chakra-ui/react";
import NotificationSettingItem from "../../components/NotificationSettingItem/NotificationSettingItem";
import Header from "../../components/Header/Header";

export default function NotificationSettings() {
  const settings = [
    { name: "General" },
    { name: "Channels" },
    { name: "Study Chats" },
    { name: "Subscriptions" },
  ];
  return (
    <Box maxW="720px" m="0 auto">
      <Header pageName="Notifications" />

      <Box paddingTop="5px">
        {settings?.map((item) => (
          <NotificationSettingItem name={item.name} />
        ))}
      </Box>
    </Box>
  );
}
