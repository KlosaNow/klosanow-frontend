import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BottomNav } from "../../../../components";
import Contacts from "../../components/Contacts";
import StudyGroupInfo from "../../components/StudyGroupInfo";
import StudyChatEmptyState from "../../components/StudyChatEmptyState";
import CreateStudyChatIllustration from "../../assets/images/CreateStudyChatIllustration.jpg";
import { CONTACTS_MOCKDATA } from "../../data";
import { useLocation } from "react-router-dom";
import { StudyGroupInfoLocation } from "../../../../types/studyChat";

const CreateStudyChat: React.FC = () => {
  const location = useLocation();
  const locationState = location.state as StudyGroupInfoLocation;

  return (
    <Box height="100vh">
      <Flex width="100%" h="100%" position="relative">
        {!locationState.isContactsAdded ? (
          <Contacts contacts={CONTACTS_MOCKDATA} />
        ) : (
          <StudyGroupInfo />
        )}

        <Box
          display={{
            base: "none",
            lg: "block",
          }}
          w="100%"
          padding={"100px 30px 0"}
        >
          <StudyChatEmptyState
            image={CreateStudyChatIllustration}
            desc="Create a new  study group & get started with your lessons"
          />
        </Box>
      </Flex>

      <BottomNav />
    </Box>
  );
};

export default CreateStudyChat;
