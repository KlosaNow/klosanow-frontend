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
        >
          <Box position="relative">
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size="xl"
              isCentered={false}
            >
              <ModalOverlay bg="#ffffff5a" />
              <ModalContent
                maxH="100vh"
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
                <ModalHeader>Notifications</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Notifications />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <Outlet />

          {pathname === "/dashboard" && <BottomNav />}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
