import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { BottomNav } from "../../BottomNav";

export default function HomeLayout(): JSX.Element {
  return (
    <Box p="1rem" minH="100vh">
      <Box height="auto">
        <Outlet />
        <BottomNav />
      </Box>
    </Box>
  );
}
