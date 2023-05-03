import { Spacer, Box, Text, Switch } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const padding = "1.5em";

export default function NotificationSettings() {
  return (
    <Box maxW="720px" m="0 auto">
      <Box display="flex" justifyContent="start" alignItems="center" h="2em">
        <ArrowBackIcon boxSize={6} mr="13px" />
        <Text fontSize="18px" fontWeight={500}>
          Notifications
        </Text>
      </Box>
      <Box h="20em">
        <Box display="flex" justifyContent="space-between" p={padding}>
          <Text fontWeight={400}>General</Text>
          <Switch size="md" colorScheme="purple" />
        </Box>

        <Spacer />

        <Box display="flex" justifyContent="space-between" p={padding}>
          <Text fontWeight={400}>Channels</Text>
          <Switch size="md" colorScheme="purple" />
        </Box>

        <Spacer />

        <Box display="flex" justifyContent="space-between" p={padding}>
          <Text fontWeight={400}>Study Chats</Text>
          <Switch size="md" colorScheme="purple" />
        </Box>

        <Spacer />

        <Box display="flex" justifyContent="space-between" p={padding}>
          <Text fontWeight={400}>Subscriptions</Text>
          <Switch size="md" colorScheme="purple" />
        </Box>
      </Box>
    </Box>
  );
}
