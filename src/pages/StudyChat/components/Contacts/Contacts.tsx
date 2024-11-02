import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { AddPeopleIcon } from "../../assets/svgs";
import ContactList from "./ContactList";
import { getContactsListWithChar } from "../../utils";
import { Contact } from "../../../../types/studyChat";
import { uniqueId } from "lodash";
import ContactSearch from "../ContactSearch";
import { heading2 } from "../../data/styles";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createStudyChatPath,
  studyChatPagePath,
} from "../../../../data/pageUrl";
import CheckBox from "../../../../components/CheckBox";

interface ContactsProps {
  contacts: Contact[];
}

interface ContactsState {
  selectAll: boolean;
  selectedContacts: Contact[];
}

const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;
  const isContactpage = pathname.includes("contacts");

  const initialState: ContactsState = {
    selectAll: false,
    selectedContacts: [],
  };

  const [state, setState] = React.useState<ContactsState>(initialState);

  const handleStateUpdate = (newState: Partial<ContactsState>) =>
    setState((state) => ({ ...state, ...newState }));

  const handleAddPeople = () => {
    console.log("people ", state.selectedContacts);
    navigate(
      { pathname: createStudyChatPath },
      {
        state: {
          contacts: state.selectedContacts,
          isContactsAdded: true,
        },
      }
    );
  };

  const handleAddConatct = (contact: Contact) => {
    console.log("contact", contact);

    navigate(studyChatPagePath);
  };

  const groupedContacts = getContactsListWithChar(contacts);

  const handleContactSelect = (
    contact: Contact | null,
    checked: boolean,
    all: boolean
  ) => {
    let selectedData = [...state.selectedContacts];

    if (all && !contact) {
      selectedData = checked ? contacts : [];
    } else if (contact && !checked) {
      selectedData = selectedData.filter((item) => item.id !== contact.id);
    } else if (contact && checked) {
      selectedData.push(contact);
    }

    handleStateUpdate({ selectedContacts: selectedData });
  };

  return (
    <Box
      padding={["0 10px 75px", "10px 25px 0 41px"]}
      width="100%"
      maxWidth="535px"
      bg="#fafafa"
    >
      <Flex
        ml="8px"
        mb="29px"
        gap="15px"
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Text {...heading2}>My Contacts</Text>
        <ContactSearch />
      </Flex>

      {!isContactpage && (
        <Box
          as="button"
          display="flex"
          gap="8px"
          alignItems="center"
          m="0 0 14px"
          onClick={handleAddPeople}
          disabled={state.selectedContacts.length === 0}
          cursor={
            state.selectedContacts.length === 0 ? "not-allowed" : "pointer"
          }
        >
          <AddPeopleIcon />
          <Text as="span">Add people</Text>
        </Box>
      )}

      <Divider />

      <Box
        mt="17px"
        p={{
          base: "0 5px",
          lg: "0 13px",
        }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text>Showing {contacts.length} Results</Text>

          {state.selectedContacts.length !== 0 && (
            <Text>{state.selectedContacts.length} selected</Text>
          )}

          {!isContactpage && (
            <CheckBox
              id="select-all"
              checked={state.selectAll}
              label="Select All"
              onChange={({ target: { checked } }) => {
                handleContactSelect(null, checked, true);
                handleStateUpdate({ selectAll: checked });
              }}
            />
          )}
        </Flex>

        <Box
          h="520px"
          overflowY="scroll"
          className="scrollbar"
          mt="14px"
          p={{
            base: "0 5px 50px 0",
            lg: "0 13px 0 0",
          }}
        >
          {groupedContacts.map(({ contactsChar, contacts }) => (
            <Box key={uniqueId("contact-list")}>
              <Text color="#808080" fontWeight="500" m="6px 0">
                {contactsChar}
              </Text>
              <Divider borderColor="#d9d9d9" />

              <ContactList
                contacts={contacts}
                selectedContacts={state.selectedContacts}
                handleContactSelect={handleContactSelect}
                hasChecks={!isContactpage}
                addContact={handleAddConatct}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
