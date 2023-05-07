import { Spacer, Box, Text, Switch } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NotificationSettingItem from "../../components/NotificationSettingItem/NotificationSettingItem";

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
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        h="2em"
        padding="2em 20px 10px"
      >
        <ArrowBackIcon boxSize={6} mr="13px" />
        <Text fontSize="18px" fontWeight={500}>
          Notifications
        </Text>
      </Box>
      <Box paddingTop="20px">
        {settings?.map((item) => (
          <NotificationSettingItem name={item.name} />
        ))}
      </Box>
    </Box>
  );
}
