import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ToggleButton } from "../../../components/ToggleButton";

const NotificationsTab = () => {
  return (
    <Box>
      <Flex flexDirection="column" gap="2rem" padding="2rem">
        <NotificationItem
          title="Push notifications"
          description="Lorem ipsum dolor sit amet consectetur. At eget arcu tempus elementum turpis fermentum."
        />
        <NotificationItem
          title="Email notifications"
          description="Lorem ipsum dolor sit amet consectetur. At eget arcu tempus elementum turpis fermentum."
        />
        <NotificationItem
          title="In-app notifications"
          description="Lorem ipsum dolor sit amet consectetur. At eget arcu tempus elementum turpis fermentum."
        />
        <NotificationItem
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur. At eget arcu tempus elementum turpis fermentum."
        />
        <NotificationItem
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur. At eget arcu tempus elementum turpis fermentum."
        />
      </Flex>
    </Box>
  );
};

interface NotificationItemProps {
  title: string;
  description: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  description,
}) => {
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Heading fontSize={18} fontWeight={500}>
          {title}
        </Heading>
        <Text color="#2A2A2A">{description}</Text>
      </Box>
      <ToggleButton />
    </Flex>
  );
};

export default NotificationsTab;
