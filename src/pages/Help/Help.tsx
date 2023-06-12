import Header from "../../components/Header/Header";
import "../../styles/help.scss";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { Link as ReachLink } from "react-router-dom";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Help = () => {
  return (
    <Box>
      <Header pageName="Help" link="/settings" />

      <Box>
        <Text className="heading2" mb="20px">
          How can we help you?
        </Text>

        <Flex direction="column" gap="26px" justify="center">
          <Link
            as={ReachLink}
            w="100%"
            display="flex"
            justifyContent="space-between"
            gap="10px"
            to="/help/mail"
          >
            <Flex gap="7px" flex="80%">
              <Box className="icons">
                <MdEmail />
              </Box>

              <Box>
                <Text pb="4px" className="heading3">
                  Mail Us
                </Text>
                <Text className="p">
                  For inquiries and complaints please send us a mail to
                  help@klosanow.com
                </Text>
              </Box>
            </Flex>
            <Box className="icons">
              <MdKeyboardArrowRight />
            </Box>
          </Link>

          <Link
            as={ReachLink}
            w="100%"
            display="flex"
            justifyContent="space-between"
            gap="10px"
            to="/help/chat"
          >
            <Flex gap="7px" flex="80%">
              <Box className="icons">
                <FaRobot />
              </Box>

              <Box>
                <Text pb="4px" className="heading3">
                  Chat with Bot
                </Text>
                <Text className="p">
                  Resolve issue quicker by chatting with bot.
                </Text>
              </Box>
            </Flex>
            <Box className="icons">
              <MdKeyboardArrowRight />
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Help;
