import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Contacts from "../../components/Contacts";
import { CONTACTS_MOCKDATA } from "../../data";
import StudyChatEmptyState from "../../components/StudyChatEmptyState";
import CreateStudyChatIllustration from "../../assets/images/CreateStudyChatIllustration.jpg";

const Conatcts: React.FC = () => {
  return (
    <Box height="100%">
      <Flex width="100%" h="100%" position="relative">
        <Contacts contacts={CONTACTS_MOCKDATA} />

        <Box
          display={{
            base: "none",
            lg: "block",
          }}
          w="100%"
          padding={"10px 30px 0"}
        >
          <StudyChatEmptyState
            image={CreateStudyChatIllustration}
            desc="Start your study conversations"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Conatcts;
