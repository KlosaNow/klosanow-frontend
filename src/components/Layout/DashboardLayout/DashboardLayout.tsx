import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

import { SideBar, NavBar, BottomNav } from "../../";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  return (
    <Box display="flex">
      <SideBar />
      <Box paddingLeft={["0px", "264px"]} width="full">
        <NavBar />
        <Box
          width="full"
          height="auto"
          margin="auto"
          padding={["10px", "100px 30px"]}
        >
          <Outlet />

          {pathname === "/dashboard" && <BottomNav />}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
