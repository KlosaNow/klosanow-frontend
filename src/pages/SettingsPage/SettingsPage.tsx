import { Box, Image, Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import avatar from "../../assets/images/Avatar.png";

const settings = [
  [
    { imageSrc: "/assets/SettingsPageImg/user.png", text: "Info" },
    {
      icon: <MdInfoOutline color="#7B58F4" size="30" />,
      text: "Notifications",
    },
  ],
  [
    { imageSrc: "/assets/SettingsPageImg/user.png", text: "Subscription" },
    {
      icon: <MdInfoOutline color="#7B58F4" size="30" />,
      text: "Storage",
    },
  ],
  [
    { imageSrc: "/assets/SettingsPageImg/user.png", text: "Help" },
    {
      icon: <MdInfoOutline color="#7B58F4" size="30" />,
      text: "Terms and Conditions",
    },
  ],
  [
    {
      icon: <MdInfoOutline color="#7B58F4" size="30" />,
      text: "Logout",
    },
  ],
  // Add more settings here...
];

export default function SettingsPage() {
  return (
    <Box backgroundColor="neutral.60" height="100vh">
      <Flex alignItems="center" px="4" py="2">
        <Icon as={AiOutlineArrowLeft} w="1.8rem" h="1.8rem" ml="3" />
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10"
          w="93%"
        >
          <Image src={avatar} alt="lady" mt="3" />
          <Flex flexDirection="column">
            <Text fontSize="xl">Olivia Rhye</Text>
            <Text color="#667085" fontSize="xl">
              olivia@untitledui.com
            </Text>
          </Flex>
        </Box>
        {settings.map((group, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            pt="3"
            pl="3"
            pb="3"
            background="neutral.10"
            borderRadius="10"
            alignItems="center"
            w="93%"
            h="fit"
            mt="10"
          >
            {group.map(({ icon, imageSrc, text }, index) => (
              <Flex
                key={index}
                w="100%"
                justifyContent="start"
                alignItems="center"
                mb="2"
              >
                {imageSrc ? (
                  <Image src={imageSrc} alt={text} w="1.8rem" h="1.8rem" />
                ) : (
                  icon
                )}
                <Text>{text}</Text>
              </Flex>
            ))}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
