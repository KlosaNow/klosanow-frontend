import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  UseDisclosureProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Flex,
  List,
} from "@chakra-ui/react";

import { HiChevronDown } from "react-icons/hi";
import { NotificationItem } from "../../";
import { NotificationItemProps } from "src/types";
import React from "react";

interface NotificationModalProps extends UseDisclosureProps {
  notifications: NotificationItemProps[];
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  notifications,
}) => {
  const notificationOptions = ["All", "Unread"];
  const [notificationType, setNotificationType] = React.useState(
    notificationOptions[0]
  );

  const activeNotifications =
    notificationType === notificationOptions[0]
      ? notifications
      : notifications.filter((item) => !item.isRead);

  return (
    <Modal
      // @ts-ignore
      isOpen={isOpen}
      // @ts-ignore
      onClose={onClose}
      size="xl"
      isCentered={false}
    >
      <ModalOverlay bg="#ffffff5a" />
      <ModalContent
        maxH="100vh"
        padding="20px"
        overflowY="auto"
        marginLeft="auto"
        position="fixed"
        height="100%"
        right="20px"
        top="10px"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "24px",
          },
        }}
      >
        <ModalHeader>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<HiChevronDown fontSize="20px" />}
                bg="transparent"
                p={0}
              >
                All notifications
              </MenuButton>
              <MenuList>
                {notificationOptions.map((option) => (
                  <MenuItem
                    bg="transparent"
                    fontSize={14}
                    key={option}
                    onClick={() => setNotificationType(option)}
                    _hover={{ bg: "#eee" }}
                  >
                    {option} Notifcations
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <Text
              color="primary.40"
              fontWeight="400"
              fontSize="16px"
              cursor="pointer"
            >
              Mark all as read
            </Text>
          </Flex>
        </ModalHeader>

        <ModalBody>
          <List>
            {activeNotifications.map((notificationItem, index) => (
              <NotificationItem
                key={index}
                notificationItem={notificationItem}
              />
            ))}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NotificationModal;
