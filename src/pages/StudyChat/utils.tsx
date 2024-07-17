import { Box, Flex, Image } from "@chakra-ui/react";
import { Contact, GroupedContact } from "../../types/studyChat";
import { colors } from "../../data/colors";
import DummyFileIllustration from "./assets/images/file.png";
import { DeleteIcon } from "./assets/svgs";
import { BsFillSendFill } from "react-icons/bs";

export const getContactsListWithChar = (contacts: Contact[]) => {
  contacts.sort((a, b) => {
    const nameA = a.name[0];
    const nameB = b.name[0];

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  const groupedContacts = Object.groupBy(contacts, (item) => item.name[0]);

  const grouped = Object.keys(groupedContacts).map((value, keyIndex) => {
    let arr: GroupedContact;

    Object.values(groupedContacts).map((groupedContact, valueIndex) => {
      if (!groupedContact) return;

      if (keyIndex === valueIndex) {
        arr = { contactsChar: value, contacts: groupedContact };
      }
    });

    return arr!;
  });

  return grouped;
};

export const renderUploadedDataPreview = (type: string, url: string) => {
  if (type.includes("image")) {
    return (
      <Box bg="#000" borderRadius="8px">
        <Image
          src={url}
          w="100%"
          h="100%"
          maxH="156px"
          borderRadius="8px"
          objectFit="contain"
          opacity="0.85"
        />
      </Box>
    );
  }

  if (type.includes("audio")) {
    return (
      <audio src={url} style={{ width: "100%", height: "100%" }} controls />
    );
  }

  if (type.includes("video")) {
    return (
      <video
        src={url}
        style={{ width: "100%", height: "100%", maxHeight: "156px" }}
        controls
      />
    );
  }

  if (["pdf", "txt", "doc", "docx"].map((item) => type.includes(item))) {
    return (
      <Box bg={colors.neutral[60]} w="70px" borderRadius="8px">
        <Image
          src={DummyFileIllustration}
          w="100%"
          h="100%"
          borderRadius="8px"
          objectFit="contain"
        />
      </Box>
    );
  }
};

export const renderPreveiwAction = (send: () => void, remove: () => void) => (
  <Flex alignItems="center" justifyContent="space-between" padding="0 10px">
    <Box as="button" padding="3px" onClick={send}>
      <BsFillSendFill />
    </Box>

    <Box as="button" onClick={remove}>
      <DeleteIcon />
    </Box>
  </Flex>
);
