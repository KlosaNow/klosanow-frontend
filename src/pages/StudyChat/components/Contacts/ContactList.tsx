import React from "react";
import { Box, Circle, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Contact } from "../../../../types/studyChat";
import CheckBox from "../../../../components/CheckBox";
import { uniqueId } from "lodash";

interface ContactListItemProps {
  contacts: Contact[];
  selectedContacts: Contact[];
  hasChecks?: boolean;
  addContact: (x: Contact) => void;
  handleContactSelect: (
    contact: Contact,
    checked: boolean,
    all: boolean
  ) => void;
}

const ContactListItem: React.FC<ContactListItemProps> = ({
  contacts,
  handleContactSelect,
  selectedContacts,
  hasChecks,
  addContact,
}) => {
  const last_seen = "last seen 8 hours ago";

  const contactId = selectedContacts.map((item) => item.id);

  return (
    <>
      {contacts.map((contact) => (
        <Flex
          gap="12px"
          key={uniqueId("contact-list-item")}
          m="16px 0"
          as={hasChecks ? "div" : "button"}
          textAlign="start"
          w="100%"
          onClick={hasChecks ? () => null : () => addContact(contact)}
        >
          <Circle size="50px" bg="#b1b1b1" overflow="hidden">
            <Image src={contact.imageUrl} />
          </Circle>

          <Box w="100%">
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontSize="18px" fontWeight="500" color="#000000">
                  {contact.name}
                </Text>

                <Text fontSize="14px" color="#555555" mt="4px">
                  {last_seen}
                </Text>
              </Box>

              {hasChecks ? (
                <CheckBox
                  id={`check-${contact.id}`}
                  checked={contactId.includes(contact.id)}
                  onChange={({ target: { checked } }) =>
                    handleContactSelect(contact, checked, false)
                  }
                />
              ) : null}
            </Flex>

            <Divider borderColor="#d9d9d9" mt="6px" />
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default ContactListItem;
