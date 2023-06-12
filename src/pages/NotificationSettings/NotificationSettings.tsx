import { Spacer, Box, Text, Switch } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NotificationSettingItem from "../../components/NotificationSettingItem/NotificationSettingItem";
import Header from "../../components/Header/Header";

const padding = "1.5em";

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
