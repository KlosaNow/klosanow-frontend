import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { BottomNav } from "../Navigation";
import { generalLayoutInterface } from "../../types/LayoutInterface";

export const GeneralLayout = ({}: generalLayoutInterface): JSX.Element => {
  return (
    <Box paddingX="16px" minH="100vh" paddingY="10px 20px">
      <Outlet />
    </Box>
  );
};
