import React from "react";
import { Box, Circle, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Contact } from "../../../../types";
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
  const contactId = selectedContacts.map((item) => item._id);
  const defaultImg = "https://picsum.photos/50/50";

  return (
    <>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
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
              <Image src={contact.image ?? defaultImg} />
            </Circle>

            <Box w="100%">
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text fontSize="18px" fontWeight="500" color="#000000">
                    {contact.name}
                  </Text>

                  <Text fontSize="14px" color="#555555" mt="4px">
                    {contact.email}
                  </Text>
                </Box>

                {hasChecks ? (
                  <CheckBox
                    id={`check-${contact._id}`}
                    checked={contactId.includes(contact._id)}
                    onChange={({ target: { checked } }) =>
                      handleContactSelect(contact, checked, false)
                    }
                  />
                ) : null}
              </Flex>

              <Divider borderColor="#d9d9d9" mt="6px" />
            </Box>
          </Flex>
        ))
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          p="24px"
          h={"100%"}
          w={"100%"}
        >
          NO CONTACT
        </Box>
      )}
    </>
  );
};

export default ContactListItem;
