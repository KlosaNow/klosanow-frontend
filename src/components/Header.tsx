import { Link as ReachLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { Flex, Text, Link } from "@chakra-ui/react";

interface PageName {
  pageName: string;
  link: string;
}

const Header = (props:PageName) => {
  const { pageName, link } = props;

  return (
    <Flex alignItems="center" gap="10px" p="18px 3%">
      <Link as={ReachLink} to={link}>
        <HiArrowLeft />
      </Link>
      <Text className="heading2" size="md">{pageName}</Text>
    </Flex>
  );
};

export default Header;
