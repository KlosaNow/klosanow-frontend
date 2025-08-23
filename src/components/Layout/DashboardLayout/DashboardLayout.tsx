import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { SideBar, NavBar, BottomNav } from "../../";
import NotificationModal from "../../Modals/NotificationModal/NotificationModal";
import { getToken } from "src/utils/constant";
import { useEffect } from "react";
import { sampleNotifications } from "src/pages/Notifications/Notifications";

const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = getToken();

  useEffect(() => {
    if (!token) window.location.reload();
  }, [token]);

  return (
    <Box display="flex">
      <SideBar />
      <Box width="full" h="100vh">
        <NavBar
          notificationCtrl={onOpen}
          notificationLength={sampleNotifications.length}
        />
        <Box width="full" overflow={"scroll"} h="calc(100vh - 60px)">
          <NotificationModal
            isOpen={isOpen}
            onClose={onClose}
            notifications={sampleNotifications}
          />

          <Outlet />

          <BottomNav />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
