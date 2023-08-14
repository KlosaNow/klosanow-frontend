import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

import { SideBar, NavBar, BottomNav } from "../../";
import { Notifications } from "../../../pages";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display="flex">
      <SideBar />
      <Box paddingLeft={["0px", "264px"]} width="full">
        <NavBar notificationCtrl={onOpen} />
        <Box
          width="full"
          height="auto"
          margin="auto"
          padding={["10px", "100px 30px"]}
          onClick={onOpen}
        >
          <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered={false}>
            <ModalOverlay bg="#ffffff5a" />
            <ModalContent maxH="90vh" overflowY="auto" marginLeft="auto">
              <ModalHeader>Notifications</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Notifications />
              </ModalBody>
            </ModalContent>
          </Modal>
          <Outlet />

          {pathname === "/dashboard" && <BottomNav />}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
