import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export const ToggleButton: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Box
      bg={toggle ? "#7B58F4" : "#D4D4D4"}
      borderRadius={50}
      cursor="pointer"
      display="flex"
      height="fit-content"
      paddingY={2}
      paddingX={9}
      position="relative"
      onClick={handleToggle}
    >
      <Text color="#FFFFFF" fontSize={14} fontWeight={500}>
        {toggle ? "On" : "Off"}
      </Text>
      <Box
        bg="#FFF"
        borderRadius="100%"
        height={6}
        position="absolute"
        right={toggle ? "5px" : "60px"}
        top={1.5}
        width={6}
      />
    </Box>
  );
};