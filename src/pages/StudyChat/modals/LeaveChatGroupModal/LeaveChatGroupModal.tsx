import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { StudyChatContext } from "../../context/StudyChat";
import { updateStudyChat } from "src/api-endpoints/studyChat";
import { useStoreSelector } from "src/redux/hooks";

const LeaveChatGroupModal: React.FC = () => {
  const { showLeaveGroupModal, activeStudyChat, updateStudyChatValues } =
    React.useContext(StudyChatContext);
  const user = useStoreSelector((state) => state.user);

  const toast = useToast();
  const [loading, setLoading] = React.useState(false);

  const handleClose = () =>
    updateStudyChatValues({
      showLeaveGroupModal: false,
      activeStudyChat: null,
    });

  const handleLeaveGroup = async () => {
    if (!activeStudyChat) return;

    try {
      setLoading(true);

      const res = await updateStudyChat(activeStudyChat.id, {
        members: {
          removeMembers: [`${user.data?._id}`],
        },
      });

      if (!res) throw new Error();

      toast({
        title: "Successful",
        description: "Members removed successfully",
      });
      updateStudyChatValues({
        showLeaveGroupModal: false,
        showRemoveMemberModal: false,
        activeStudyChat: null,
        isNewChat: true,
      });
    } catch (error: any) {
      toast({
        title: error.message || error.response.message || "Failed",
        description: "Something went wrong trying to remove members, try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      onClose={handleClose}
      isOpen={showLeaveGroupModal}
      scrollBehavior="inside"
    >
      <ModalOverlay />

      <ModalContent padding={"16px"}>
        <ModalHeader padding={0}>
          <Text fontWeight={600} fontSize={16}>
            Leave
            <span style={{ color: "#9174F6" }}>
              {activeStudyChat?.username || activeStudyChat?.name}
            </span>
          </Text>
          <Text fontWeight={400} fontSize={13}>
            Are you sure you want to leave this group?
          </Text>
        </ModalHeader>

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
            onClick={handleLeaveGroup}
          >
            {loading ? "loading" : "Leave group"}
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default LeaveChatGroupModal;
