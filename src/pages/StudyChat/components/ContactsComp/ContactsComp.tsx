import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { AddPeopleIcon } from "../../assets/svgs";
import ContactList from "./ContactList";
import { getContactsListWithChar, transformNameToSlug } from "../../utils";
import { ChatData, Contact } from "../../../../types/studyChat";
import { uniqueId } from "lodash";
import ContactSearch from "../ContactSearch";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  createStudyChatPath,
  studyChatPagePath,
} from "../../../../data/pageUrl";
import CheckBox from "../../../../components/CheckBox";
import { heading2 } from "../../data";
import { setStorageItem } from "src/utils/generics";
import { CHAT_CONTACT_KEY } from "src/data/constants";
import { formatISO } from "date-fns";
import { AddMembersModal } from "../../modals";
import { BsChatLeftText } from "react-icons/bs";

interface ContactsProps {
  contacts: Contact[];
}

interface ContactsState {
  selectAll: boolean;
  selectedContacts: Contact[];
  searchValue: string;
  showModal: boolean;
}

const ContactsComp: React.FC<ContactsProps> = ({ contacts }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const addMemberId = searchParams.get("add");
  const addMemberName = searchParams.get("name");

  const pathname = location.pathname;
  const isContactpage = pathname.includes("contacts");

  const initialState: ContactsState = {
    selectAll: false,
    selectedContacts: [],
    searchValue: "",
    showModal: false,
  };

  const [state, setState] = React.useState<ContactsState>(initialState);

  const handleStateUpdate = (newState: Partial<ContactsState>) =>
    setState((state) => ({ ...state, ...newState }));

  const handleAddPeople = () =>
    navigate(
      { pathname: createStudyChatPath },
      {
        state: {
          contacts: state.selectedContacts,
          isContactsAdded: true,
        },
      }
    );

  const handleAddContact = (contact: Contact) => {
    const contactData: ChatData = {
      createdAt: formatISO(new Date()),
      updatedAt: formatISO(new Date()),
      __v: 0,
      _id: "",
      members: [contact],
    };
    setStorageItem(CHAT_CONTACT_KEY, JSON.stringify(contactData));
    navigate(`${studyChatPagePath}?slug=${transformNameToSlug(contact.name)}`);
  };

  const contactList =
    state.searchValue === ""
      ? state.selectedContacts
      : contacts.filter((item) =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        );

  const groupedContacts = getContactsListWithChar(contactList);

  const handleContactSelect = (
    contact: Contact | null,
    checked: boolean,
    all: boolean
  ) => {
    let selectedData = [...state.selectedContacts];

    if (all && !contact) {
      selectedData = checked ? contactList : [];
    } else if (contact && !checked) {
      selectedData = selectedData.filter((item) => item._id !== contact._id);
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
        <ContactSearch
          value={state.searchValue}
          setValue={(searchValue) => handleStateUpdate({ searchValue })}
        />
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

      {!!addMemberId && (
        <Box
          as="button"
          display="flex"
          gap="8px"
          alignItems="center"
          m="0 0 14px"
          onClick={() => handleStateUpdate({ showModal: true })}
          cursor={"pointer"}
        >
          <AddPeopleIcon />
          <Text as="span">Add learners</Text>
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
          <Text>Showing {contactList.length} Results</Text>

          {state.selectedContacts.length !== 0 && (
            <Text>{state.selectedContacts.length} selected</Text>
          )}

          {!isContactpage && (
            <CheckBox
              id="select-all"
              checked={
                state.selectAll &&
                state.selectedContacts.length === contacts.length
              }
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
          {groupedContacts.length > 0 ? (
            groupedContacts.map(({ contactsChar, contacts }) => (
              <Box key={uniqueId("contact-list")}>
                <Text color="#808080" fontWeight="500" m="6px 0">
                  {contactsChar}
                </Text>
                <Divider borderColor="#d9d9d9" />

                <ContactList
                  contacts={contacts}
                  selectedContacts={state.selectedContacts}
                  handleContactSelect={handleContactSelect}
                  hideCheck={isContactpage && !addMemberId}
                  addContact={handleAddContact}
                />
              </Box>
            ))
          ) : (
            <Flex align="center" justify="center" minH="300px" flexDir="column">
              <BsChatLeftText fontSize={78} />
              <Text>Enter contact name</Text>
            </Flex>
          )}
        </Box>
      </Box>

      <AddMembersModal
        show={state.showModal}
        chatGroupId={addMemberId || ""}
        chatGroupName={addMemberName || ""}
        members={state.selectedContacts}
        handleClose={() => handleStateUpdate({ showModal: false })}
      />
    </Box>
  );
};

export default ContactsComp;
