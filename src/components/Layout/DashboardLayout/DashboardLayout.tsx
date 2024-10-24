import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { SideBar, NavBar, BottomNav } from "../../";
import NotificationModal from "../../Modals/NotificationModal/NotificationModal";
import { getToken } from "src/utils/constant";
import { useEffect } from "react";

const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = getToken();

  useEffect(() => {
    if (!token) window.location.reload();
  }, [token]);

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

          <BottomNav />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
