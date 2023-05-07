import { Box, Switch, Text } from "@chakra-ui/react";

interface props {
  name: string;
}
const NotificationSettingItem = ({ name }: props) => {
  const padding = "10px 1.5em";

  return (
    <Box display="flex" justifyContent="space-between" p={padding}>
      <Text fontWeight={400}>{name}</Text>
      <Switch size="md" colorScheme="purple" />
    </Box>
  );
};

export default NotificationSettingItem;
