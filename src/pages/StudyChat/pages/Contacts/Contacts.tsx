import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ContactsComp from "../../components/ContactsComp";
import StudyChatEmptyState from "../../components/StudyChatEmptyState";
import CreateStudyChatIllustration from "../../assets/images/CreateStudyChatIllustration.jpg";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "src/api-endpoints/contacts";

const Contacts: React.FC = () => {
  const dispatch = useStoreDispatch();
  const contacts = useStoreSelector((state) => state.contacts.contacts);

  useQuery({
    queryKey: ["contacts"],
    queryFn: () => dispatch(fetchContacts()),
  });

  return (
    <Box height="100%">
      <Flex width="100%" h="100%" position="relative">
        <ContactsComp contacts={contacts.data} />

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

export default Contacts;
