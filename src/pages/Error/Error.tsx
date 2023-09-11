import { Box, Text } from "@chakra-ui/react";

export default function Error() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Text fontSize="4xl" color="primary.70">
        Error page
      </Text>
    </Box>
  );
}
