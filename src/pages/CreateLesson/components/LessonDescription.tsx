import { Box, Button, Text } from "@chakra-ui/react";
import { FormikStepComponentProps } from "../../../types/components/componetInterface";

const LessonDescription = ({ nextFunc }: FormikStepComponentProps) => {
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

      <Button onClick={nextFunc}>Next</Button>
    </Box>
  );
};

export default LessonDescription;
