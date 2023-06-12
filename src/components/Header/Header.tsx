import { Link as ReachLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { Flex, Text, Link } from "@chakra-ui/react";

interface headerInterface {
  pageName?: string;
  link?: string;
}

const Header = (props: headerInterface) => {
  const { pageName, link } = props;

  return (
    <Flex alignItems="center" gap="10px" p="16px 10px" width="full">
      {link ? (
        <Link as={ReachLink} to={link}>
          <HiArrowLeft fontSize={24} />
        </Link>
      ) : (
        <HiArrowLeft
          fontSize={24}
          onClick={() => {
            history.back();
          }}
        />
      )}

      {pageName && (
        <Text fontSize="18px" fontWeight="500" color="#2a2a2a" size="md">
          {pageName}
        </Text>
      )}
    </Flex>
  );
};

export default Header;
