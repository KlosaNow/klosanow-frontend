import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { dashboardLayoutInterface } from "../../../types/components/componetInterface";
import { SideBar, NavBar, BottomNav } from "../../";

const DashboardLayout = ({ children }: dashboardLayoutInterface) => {
  const { pathname } = useLocation();
  return (
    <Box display="flex">
      <SideBar />
      <Box paddingLeft={["auto", "264px"]}>
        <NavBar />
        <Box width="full" margin="auto" padding={["20px", "80px 30px"]}>
          <Outlet />
        </Box>

        {pathname === "/dashboard" && <BottomNav />}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
