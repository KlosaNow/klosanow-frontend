import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { BottomNav } from "../..";
import Header from "../../Header/Header";

export default function CreateLessonLayout() {
  return (
    <Box p="1rem" minH="100vh" width="full">
      <Box height="auto">
        <Header />
        <Outlet />
        <BottomNav />
      </Box>
    </Box>
  );
}
