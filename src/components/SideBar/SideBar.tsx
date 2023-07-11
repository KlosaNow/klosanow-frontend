import { Box } from "@chakra-ui/react";

const SideBar = () => {
  return (
    <Box
      width="264px"
      backgroundColor="#0a0a0a"
      color="#fff"
      position="fixed"
      height="full"
      zIndex="50"
      display={["none", "block"]}
      padding="50px"
    >
      SideBar
    </Box>
  );
};

export default SideBar;
