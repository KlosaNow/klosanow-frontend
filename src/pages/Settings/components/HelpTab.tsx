import { Box, Image, Text, Flex } from "@chakra-ui/react";
import brandImage from "../../../assets/SettingsPageImg/Brand.png";

const HelpTab: React.FC = () => {
  const mediaLinks: string[] = [
    "Media Link 1",
    "Media Link 1",
    "Media Link 1",
    "Media Link 1",
  ];

  return (
    <Box bg="#f4f4f44d" p={30}>
      <Flex align="center" mb="3rem">
        <Image src={brandImage} alt="brand img" />
        <Flex flexDirection="column" ml={4} gap={2}>
          <Text fontSize={20} fontWeight={600}>
            Brand Name
          </Text>
          <Text color="#2A2A2A" fontSize={18}>
            Lorem ipsum dolor sit amet consectetur. At eget arcu tempus.
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap={6} mb="3rem">
        <Text fontSize={20} fontWeight={600}>
          Our Social Medias
        </Text>
        <Text color="#2A2A2A">
          Lorem ipsum dolor sit amet consectetur. At eget arcu tempus elementum
          turpis fermentum.
        </Text>
        <Flex gap={6}>
          {mediaLinks.map((link, id) => (
            <Box
              key={id}
              borderRadius={50}
              bg="#FFFFFF"
              color="#000000"
              cursor="pointer"
              padding={2}
            >
              {link}
            </Box>
          ))}
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap={6} mb="3rem">
        <Text fontSize={20} fontWeight={600}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Box
          borderRadius={50}
          bg="#FFFFFF"
          color="#000000"
          cursor="pointer"
          padding={2}
          textAlign="center"
          width={240}
        >
          Our email address link
        </Box>
      </Flex>

      <Flex flexDirection="column" gap={6} mb="3rem">
        <Text fontSize={20} fontWeight={600}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Box
          borderRadius={50}
          bg="#FFFFFF"
          color="#000000"
          cursor="pointer"
          padding={2}
          textAlign="center"
          width={240}
        >
          Read our Faq
        </Box>
      </Flex>
    </Box>
  )
}

export default HelpTab;