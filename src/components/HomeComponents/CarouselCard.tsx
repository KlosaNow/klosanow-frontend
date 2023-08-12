import { FC } from "react";
import { Container, VStack, Text, Box } from "@chakra-ui/react";

interface CarouselCardProps {
  img: string;
  title: string;
  timestamp: string;
  description: string;
}
export const CarouselCard: FC<CarouselCardProps> = ({
  img,
  title,
  timestamp,
  description,
}: CarouselCardProps) => {
  return (
    <Container width="190px" padding={0}>
      <VStack>
        <Box
          pos="relative"
          padding={0}
          borderRadius={5}
          overflow="hidden"
          width="100%"
          height="150px"
        >
          <img
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
            src={img}
            alt=""
          />
          <Text
            pos="absolute"
            bottom={5}
            right={5}
            fontSize={12}
            background="#000"
            paddingY={1}
            paddingX={4}
            borderRadius={15}
            color="#fff"
          >
            {timestamp}
          </Text>
        </Box>
        <Text fontSize={16} fontWeight="600" color="#000">
          {title}
        </Text>
        <Text fontSize={12} fontWeight="400" color="#000">
          {description}
        </Text>
      </VStack>
    </Container>
  );
};
