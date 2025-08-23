import {
  Button,
  Flex,
  ListItem,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { uniqueId } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { studyChatPagePath } from "src/data/pageUrl";
import { Contact } from "src/types";
import { transformNameToSlug } from "../../utils";
import { updateStudyChat } from "src/api-endpoints/studyChat";

interface AddMembersModalProps {
  show: boolean;
  handleClose: () => void;
  chatGroupId: string;
  chatGroupName: string;
  members: Contact[];
}

const AddMembersModal: React.FC<AddMembersModalProps> = ({
  show,
  handleClose,
  chatGroupId,
  members,
  chatGroupName,
}) => {
  const navigate = useNavigate();

  const handleAddlearners = async () => {
    await updateStudyChat(chatGroupId, {
      members: {
        addMembers: members.map((item) => item._id),
      },
    });
    handleClose();
    navigate(`${studyChatPagePath}?slug=${transformNameToSlug(chatGroupName)}`);
  };

  return (
    <Modal onClose={handleClose} isOpen={show}>
      <ModalOverlay />

      <ModalContent padding={"16px"}>
        <Text fontWeight={600} fontSize={16}>
          Add members to{" "}
          <span style={{ color: "#9174F6" }}>{chatGroupName}</span>
        </Text>

        <UnorderedList
          listStyleType="none"
          margin={0}
          border={"1px solid #eee"}
          borderRadius={6}
          display={"flex"}
          flexDir={"column"}
          marginTop={"24px"}
        >
          {members.map(({ _id, name, email }, idx) => (
            <ListItem
              key={uniqueId(`members-${_id}`)}
              padding={"12px"}
              borderBottom={
                members.length - 1 === idx ? "none" : "1px solid #eee"
              }
            >
              <Text textTransform={"capitalize"}>{name}</Text>

              <Text fontSize={"12px"} color={"#000000aa"}>
                {email}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>

        <Flex align="center" gap="24px" marginTop={"24px"}>
          <Button type="button" onClick={handleClose} w={"full"}>
            Cancel
          </Button>

          <Button
            w={"full"}
            bg="#9174F6"
            _hover={{ bg: "#A790F8" }}
            color="#fff"
            fontSize={["13px", "16px"]}
            onClick={handleAddlearners}
          >
            Add leaners
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default AddMembersModal;
