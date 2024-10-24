import React from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

interface OverlayLoaderProps {
  loading: boolean;
  description?: string;
}

const OverlayLoader: React.FC<OverlayLoaderProps> = ({
  loading,
  description,
}) => {
  return (
    loading && (
      <Box
        position={"fixed"}
        bottom={0}
        zIndex={1}
        bg={"#fff"}
        h={"100vh"}
        w={"100%"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          w="100%"
          h="100%"
        >
          <Spinner
            boxSize={16}
            borderWidth="4px"
            speed="0.8s"
            emptyColor="#d0cccc"
            color="#7B58F4"
            mb={"16px"}
          />

          {!!description && (
            <Text textTransform={"capitalize"}>{description}</Text>
          )}
        </Box>
      </Box>
    )
  );
};

export default OverlayLoader;
