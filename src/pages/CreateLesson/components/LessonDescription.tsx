import { Box, Text } from "@chakra-ui/react";

const LessonDescription = () => {
  return (
    <Box>
      <Text
        fontSize="32px"
        display={["none", "block"]}
        fontWeight="500"
        textColor="black.100"
      >
        Create your lessons
      </Text>
    </Box>
  );
};

export default LessonDescription;
