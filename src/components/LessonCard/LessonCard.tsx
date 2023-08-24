import { Container, Box, Text, Image } from "@chakra-ui/react";
// import img from "../../assets/images/dummyImg.png";
import { LessonCardInterface } from "../../types/components/componetInterface";

const LessonCard = ({
  title,
  description,
  thumbnail,
  duration,
  author,
}: LessonCardInterface) => {
  return (
    <Container padding={0} width={["100%", "375px"]} margin="0px" mb={10}>
      <Box position="relative" >
        <Image
          width="full"
          height={["181px", "219px"]}
          objectFit="cover"
          src={thumbnail}
          alt={title}
          borderRadius="md"
        />
        <Text
          fontSize={12}
          background="#000"
          paddingY={1}
          paddingX={4}
          borderRadius={15}
          color="#fff"
          width="fit-content"
          position="absolute"
          bottom="10px"
          right="10px"
        >
          {duration}
        </Text>
      </Box>

      <Box padding="8px 0px" width="full" pb={10}>
        <Text fontSize={16} fontWeight="500" color="#000" marginBottom="3px">
          {title}
        </Text>

        {description && (
          <Text fontSize={[12, 14]} fontWeight="400" color="black.30">
            {description} in{" "}
            <Text as="span" color="primary.40" fontWeight="500">
              {author}
            </Text>
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default LessonCard;
