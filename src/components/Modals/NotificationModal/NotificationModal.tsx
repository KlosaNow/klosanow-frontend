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
import { sampleNotifications } from "../../../pages/Notifications/Notifications";
import { NotificationItem } from "../../";

const NotificationModal = ({ isOpen, onClose }: UseDisclosureProps) => {
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
                <MenuItem bg="transparent">All Notifcations</MenuItem>
                <MenuItem bg="transparent">Unread Notifcations</MenuItem>
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
            {sampleNotifications.map((notificationItem, index) => (
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
