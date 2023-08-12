import { Box, Image, Text } from "@chakra-ui/react";
import { LessonDraftProp } from "../../types/components/componetInterface";

const LessonDraftCard = ({
  draftSrc,
  draftTitle,
  draftDescription,
}: LessonDraftProp): JSX.Element => {
  return (
    <Box
      display="flex"
      alignContent="center"
      mb="1rem"
      border={["0.5px solid #CCCCCC", "0px"]}
      borderRadius="md"
    >
      <Image
        src={draftSrc}
        borderLeftRadius="md"
        borderRightRadius={["0px", "md"]}
        objectFit="cover"
        width={["82px", "255px"]}
        height={["80px", "151px"]}
      />
      <Box ml="1rem" mt="8px">
        <Text fontSize="md" fontWeight="500" color="black.40" mt=".5rem">
          {draftTitle}
        </Text>
        <Text fontSize="xs" textColor="black.10">
          {draftDescription}
        </Text>
      </Box>
    </Box>
  );
};

export default LessonDraftCard;
