import { Box, Spinner } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <Box
      minHeight="100vh"
      width="100vw"
      alignItems="center"
      display="flex"
      justifyContent="center"
    >
      <Spinner
        boxSize={16}
        borderWidth="4px"
        speed="0.8s"
        emptyColor="#d0cccc"
        color="#7B58F4"
      />
    </Box>
  );
};

export default PageLoader;
