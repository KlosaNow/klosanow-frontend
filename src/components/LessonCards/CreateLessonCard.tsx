import { Box, Image, Text, Button, Link } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import cardBg from "../../assets/cardBg.svg";

interface LessonCardProps {
  bgColor: string;
  buttonText: string;
  buttonTextColor: string;
  cardTitle: string;
  cardDesc: string;
  cardSrc: string;
  buttonLink?: string;
}

export default function CreateLessonCard({
  bgColor,
  buttonText,
  buttonTextColor,
  cardDesc,
  cardTitle,
  cardSrc,
  buttonLink,
}: LessonCardProps): JSX.Element {
  return (
    <>
      <Box
        // h="205px"
        borderRadius="4px"
        bg={bgColor}
        bgRepeat="no-repeat"
        backgroundPosition="right"
        backgroundSize="cover"
        p="2rem"
        backgroundImage={cardBg}
        mt="1.5rem"
        mb="2rem"
        width="full"
      >
        <Image
          boxSize="100px"
          objectFit="cover"
          src={cardSrc}
          alt={cardTitle}
          borderRadius="4px"
          marginTop="-70px"
          display={["block", "none"]}
          width="120px"
          height="120px"
        />
        <Box
          display="flex"
          justifyContent="space-between"
          mt="1.5rem"
          gap={2}
          width="full"
        >
          <Box>
            <Text
              fontSize="24px"
              textColor="neutral.5"
              fontWeight={["500", "600"]}
            >
              {cardTitle}
            </Text>
            <Text fontSize="md" textColor="neutral.5">
              {cardDesc}
            </Text>
          </Box>
          <Button
            marginTop={["50px", "80px"]}
            marginBottom={["-10px"]}
            marginLeft="auto"
            p={["1rem 2rem", "25px 50px"]}
            textColor={[buttonTextColor, "black.100"]}
            bgColor="neutral.5"
            borderRadius="4px"
          >
            <Link as={RouterLink} to={buttonLink}>
              {buttonText}
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
}
