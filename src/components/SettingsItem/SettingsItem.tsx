import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface props {
  imageSrc: string;
  text: string;
  link: string;
}

const SettingsItem = ({ imageSrc, text, link }: props) => {
  return (
    <Link to={link}>
      <Box
        display="flex"
        padding="5px"
        margin="10px 0px"
        gap="6"
        alignItems="center"
      >
        <Image src={imageSrc} alt="user" w="1.8rem" h="1.8rem" />
        <Text>{text}</Text>
      </Box>
    </Link>
  );
};

export default SettingsItem;
