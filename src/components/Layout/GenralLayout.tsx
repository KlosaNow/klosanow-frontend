import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const GeneralLayout = (): JSX.Element => {
  return (
    <Box paddingX="16px" minH="100vh" paddingY="10px 20px">
      <Outlet />
    </Box>
  );
};
