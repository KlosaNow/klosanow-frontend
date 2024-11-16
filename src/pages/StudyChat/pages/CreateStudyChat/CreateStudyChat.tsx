import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BottomNav } from "../../../../components";
import Contacts from "../../components/Contacts";
import StudyGroupInfo from "../../components/StudyGroupInfo";
import StudyChatEmptyState from "../../components/StudyChatEmptyState";
import CreateStudyChatIllustration from "../../assets/images/CreateStudyChatIllustration.jpg";
import { useLocation } from "react-router-dom";
import { StudyGroupInfoLocation } from "../../../../types/studyChat";
import { fetchContacts } from "src/api-endpoints/contacts";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import { useQuery } from "@tanstack/react-query";

const CreateStudyChat: React.FC = () => {
  const location = useLocation();
  const locationState = location.state as StudyGroupInfoLocation;

  const dispatch = useStoreDispatch();
  const contacts = useStoreSelector((state) => state.contacts.contacts);

  useQuery({
    queryKey: ["contacts"],
    queryFn: () => dispatch(fetchContacts()),
  });

  return (
    <Box height="100%">
      <Flex width="100%" h="100%" position="relative">
        {!locationState.isContactsAdded ? (
          <Contacts contacts={contacts.data} />
        ) : (
          <StudyGroupInfo />
        )}

        <Box
          display={{
            base: "none",
            lg: "block",
          }}
          w="100%"
          padding={"24px 30px 0"}
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
