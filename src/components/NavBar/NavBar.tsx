import { Box } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box
      position="fixed"
      width="full"
      height="60px"
      display={["none", "flex"]}
      alignItems="center"
      borderBottom="0.3px solid #C8C8C8"
      backgroundColor="#fff"
      padding="0px 50px"
      zIndex="50"
    >
      NavBar
    </Box>
  );
};

export default NavBar;
