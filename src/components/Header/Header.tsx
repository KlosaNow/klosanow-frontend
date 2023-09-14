import { Link as ReachLink } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Flex, Text, Link, Box } from "@chakra-ui/react";
import { headerInterface } from "../../types/components/componetInterface";

const Header = (props: headerInterface) => {
  const { pageName, link } = props;

  return (
    <Flex
      alignItems="center"
      flexDirection="row"
      gap="10px"
      p="10px 5px 16px"
      width="100%"
      display={["flex", "none"]}
      // display="none"
    >
      <HiOutlineArrowLeft
        fontSize={20}
        onClick={() => {
          history.back();
        }}
      />
      {/* <Box width="fit-content">
        {link ? (
          <Link
            as={ReachLink}
            to={link}
            margin="0px"
            style={{
              margin: "0px",
              width: "fit-content",
            }}
          >
            <HiArrowLeft fontSize={20} />
          </Link>
        ) : (
          <HiArrowLeft
            fontSize={20}
            onClick={() => {
              history.back();
            }}
          />
        )}
      </Box> */}

      {pageName && (
        <Text fontSize="18px" fontWeight="500" color="#2a2a2a" size="md">
          {pageName}
        </Text>
      )}
    </Flex>
  );
};

export default Header;
