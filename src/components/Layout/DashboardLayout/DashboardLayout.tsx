import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { SideBar, NavBar, BottomNav } from "../../";
import NotificationModal from "../../Modals/NotificationModal/NotificationModal";

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
          padding={["10px 10px 75px", "0"]}
        >
          <Box position="relative">
            <NotificationModal isOpen={isOpen} onClose={onClose} />
          </Box>
          <Outlet />

          {pathname === "/dashboard" && <BottomNav />}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
