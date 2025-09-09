import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import CheckBox from "src/components/CheckBox";
import { StudyChatContext } from "../../context/StudyChat";
import { updateStudyChat } from "src/api-endpoints/studyChat";
import { useStoreSelector } from "src/redux/hooks";

const RemoveMemberModal: React.FC = () => {
  const { showRemoveMemberModal, activeStudyChat, updateStudyChatValues } =
    React.useContext(StudyChatContext);
  const user = useStoreSelector((state) => state.user);

  const toast = useToast();
  const [selected, setSelected] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    setSelected([]);
    updateStudyChatValues({
      showRemoveMemberModal: false,
      activeStudyChat: null,
    });
  };

  const handleRemoveLeaners = async () => {
    if (!activeStudyChat) return;

    try {
      setLoading(true);
      const res = await updateStudyChat(activeStudyChat.id, {
        members: {
          removeMembers: selected,
        },
      });

      if (!res) throw new Error();

      toast({
        title: "Successful",
        description: "Members removed successfully",
      });
      updateStudyChatValues({
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

  const handleCheckboxChange = (item: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter((i) => i !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  return (
    <Modal
      onClose={handleClose}
      isOpen={showRemoveMemberModal}
      scrollBehavior="inside"
      size="lg"
    >
      <ModalOverlay />
      <ModalContent
        maxHeight="80vh"
        display="flex"
        flexDirection="column"
        p="16px"
      >
        <ModalHeader p={0}>
          <Text fontWeight={600} fontSize="16px">
            Remove members from{" "}
            <Box as="span" color="#9174F6">
              {activeStudyChat?.username || activeStudyChat?.name}
            </Box>
          </Text>
        </ModalHeader>

        <ModalBody p={0} flex="1" overflow="hidden">
          <UnorderedList
            listStyleType="none"
            m={0}
            border="1px solid #eee"
            borderRadius="6px"
            mt="24px"
            overflowY="auto"
            maxHeight="100%"
            pr="4px"
            css={{
              scrollbarWidth: "thin",
              scrollbarColor: "#ccc transparent",
            }}
          >
            {activeStudyChat?.members &&
              activeStudyChat.members
                .filter((item) => item._id !== user.data?._id)
                .map(({ _id, username, name, email, photoURL }) => (
                  <ListItem
                    key={`member-${_id}`}
                    p="12px"
                    borderBottom="1px solid #eee"
                    cursor="pointer"
                    _hover={{ backgroundColor: "#eee" }}
                    onClick={() => handleCheckboxChange(_id)}
                  >
                    <Flex gap="12px" align="center">
                      <Circle size="40px" bg="#b1b1b1" overflow="hidden">
                        <Image src={photoURL} alt={username || name} />
                      </Circle>

                      <Box flex="1">
                        <Flex justify="space-between" align="center">
                          <Box>
                            <Text fontSize="14px" fontWeight="500" color="#000">
                              {username || name}
                            </Text>
                            <Text fontSize="12px" color="#555" mt="4px">
                              {email}
                            </Text>
                          </Box>

                          <CheckBox
                            id={`check-${_id}`}
                            checked={selected.includes(_id)}
                          />
                        </Flex>
                      </Box>
                    </Flex>
                  </ListItem>
                ))}
          </UnorderedList>
        </ModalBody>

        <Flex align="center" gap="24px" mt="24px">
          <Button onClick={handleClose} w="full">
            Cancel
          </Button>

          <Button
            w="full"
            bg="#9174F6"
            _hover={{ bg: "#A790F8" }}
            color="#fff"
            fontSize={["13px", "16px"]}
            isDisabled={selected.length <= 0 || loading}
            onClick={handleRemoveLeaners}
          >
            {loading ? "Loading..." : "Remove learners"}
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default RemoveMemberModal;
