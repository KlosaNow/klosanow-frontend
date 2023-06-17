import { Link, Outlet } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Box, Icon } from "@chakra-ui/react";
import { BottomNav } from "../Navigation";
import Header from "../Header/Header";

export default function CreateLessonLayout() {
  return (
    <Box p="1rem" minH="100vh">
      <Box height="auto">
        <Header />
        <Outlet />
        <BottomNav />
      </Box>
    </Box>
  );
}
