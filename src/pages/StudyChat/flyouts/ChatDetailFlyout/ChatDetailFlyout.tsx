import React from "react";
import {
  Box,
  Circle,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { StudyChatContext } from "../../context/StudyChat";
import {
  AddLearnersIcon,
  CaretForwardIcon,
  CloseIcon,
  InfoIcon,
  LeaveIcon,
  ReportIcon,
} from "../../assets/svgs";
import { ChatType } from "../../../../types/studyChat";
import { colors } from "../../../../data/colors";
import Switch from "../../../../components/Switch";
import { uniqueId } from "lodash";
import { flyoutActionsStyles } from "../../data/styles";
import { useNavigate } from "react-router-dom";
import { contactsPagePath } from "../../../../data/pageUrl";

const ChatDetailFlyout: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  // const [_, setSearchParams] = useSearchParams();

  // const { deleteStudyChat } = useChatWebSocket();

  const { activeChat, isChatDetailFlyout, updateStudyChatValues } =
    React.useContext(StudyChatContext);

  const handleClose = () =>
    updateStudyChatValues({ isChatDetailFlyout: false });

  const isGroupChat = activeChat?.type === ChatType.Group;

  const handleAddLearner = () => {
    if (!activeChat) return;

    updateStudyChatValues({ isChatDetailFlyout: false });
    navigate(
      `${contactsPagePath}?add=${activeChat.id}&name=${activeChat.name}`
    );
  };

  // const handleDeleteStudyChat = () => {
  //   if (activeChat) {
  //     deleteStudyChat(activeChat.id);
  //     setSearchParams("");
  //     updateStudyChatValues({ activeChat: null });
  //   } else null;
  // };

  return (
    <Drawer isOpen={isChatDetailFlyout} onClose={handleClose} placement="right">
      <DrawerOverlay />

      <DrawerContent w="100%" maxW="501px" bg={colors.primary[5]}>
        <Flex h="86px" padding="0 50px" alignItems="center" gap="12px">
          <IconButton
            aria-label="close-btn"
            bg="transparent"
            outline="transparent"
            _hover={{ bg: "transparent" }}
            icon={<CloseIcon />}
            onClick={handleClose}
          />
          <Text fontSize="18px">Contact Info</Text>
        </Flex>

        <Box h="100%" overflowY="scroll">
          <Grid
            h={isGroupChat ? "316px" : "531px"}
            bg={colors.primary[10]}
            placeItems="center"
          >
            <Circle
              size={isGroupChat ? "150px" : "248px"}
              bg="#D9D9D9"
              mb="12px"
              overflow="hidden"
            >
              <Image
                src={activeChat?.img}
                alt={activeChat?.name}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Circle>

            {isGroupChat && (
              <Box maxW="238px" textAlign="center">
                <Text fontSize="20px" fontWeight="500">
                  {activeChat?.name}
                </Text>
                <Box
                  mt="12px"
                  p="10px 0"
                  borderTop={`1px solid ${colors.black[10]}`}
                  borderBottom={`1px solid ${colors.black[10]}`}
                >
                  <Flex alignItems="center" gap="8px" justifyContent="center">
                    <Text fontSize="12px">Group Description</Text>
                    <InfoIcon />
                  </Flex>

                  <Text fontSize="12px" mt="4px">
                    {activeChat?.description}
                  </Text>
                </Box>
              </Box>
            )}

            {!isGroupChat && (
              <Box textAlign="center">
                <Text fontSize="20px" fontWeight="500">
                  {activeChat?.name}{" "}
                </Text>
                {/* <Text fontSize="24px" fontWeight="500">
                  {activeChat?.recipient?.phoneNumber}{" "}
                </Text> */}
              </Box>
            )}
          </Grid>

          {isGroupChat && (
            <Flex
              h="64px"
              bg={colors.primary[10]}
              alignItems="center"
              p="0 50px"
              mt="20px"
              justifyContent="space-between"
            >
              <Text fontSize="16px" fontWeight="500">
                Media, Links and docs
              </Text>

              <Flex align="center" gap="4px">
                <Text fontSize="16px" fontWeight="500">
                  0
                </Text>
                <CaretForwardIcon />
              </Flex>
            </Flex>
          )}

          <Flex
            h="64px"
            bg={colors.primary[10]}
            alignItems="center"
            p="0 44px"
            mt="20px"
            justifyContent="space-between"
          >
            <Text fontSize="16px">Mute notification</Text>
            <Switch onChange={(value) => console.log(value)} />
          </Flex>

          {isGroupChat && (
            <Box m="20px 0 60px">
              <Box bg={colors.primary[10]} h="120px" p="12px 47px">
                <Text fontSize="14px" fontWeight="500">
                  Created By
                </Text>

                <Flex alignItems="center" gap="8px" mt="20px">
                  <Circle size="50px" bg="#b1b1b1" overflow="hidden">
                    <Image src={activeChat?.admin?.image} />
                  </Circle>

                  <Flex justifyContent="center" flexDir="column">
                    <Text
                      fontSize={14}
                      fontWeight={500}
                      color="#2A2A2A"
                      lineHeight="17.5px"
                      marginBottom="5px"
                    >
                      {activeChat?.admin?.name}
                    </Text>

                    {/* <Text
                      fontSize={12}
                      fontWeight={400}
                      color="#555555"
                      lineHeight="15px"
                    >
                      {activeChat?.admin?.phoneNumber}
                    </Text> */}
                  </Flex>
                </Flex>
              </Box>

              <Box minH="120px" mt="20px" bg={colors.primary[10]} p="12px 47px">
                <Text fontSize="14px" fontWeight="500">
                  Learners
                </Text>

                <Flex flexDir="column" gap="28px" mt="20px">
                  {activeChat?.members?.map(({ name, image, _id }) => (
                    <Flex
                      alignItems="center"
                      gap="8px"
                      key={uniqueId(`learner-${_id}`)}
                    >
                      <Circle size="50px" bg="#b1b1b1" overflow="hidden">
                        <Image src={image} />
                      </Circle>

                      <Flex justifyContent="center" flexDir="column">
                        <Text
                          fontSize={14}
                          fontWeight={500}
                          color="#2A2A2A"
                          lineHeight="17.5px"
                          marginBottom="5px"
                        >
                          {activeChat.admin._id === _id ? "You" : name}
                        </Text>

                        {/* <Text
                            fontSize={12}
                            fontWeight={400}
                            color="#555555"
                            lineHeight="15px"
                          >
                            {phoneNumber}
                          </Text> */}
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Box>

              <Box bg={colors.primary[10]} h="102px" p="12px 47px" mt="20px">
                <Text fontSize="14px" fontWeight="500">
                  Actions
                </Text>

                <Flex gap="20px" alignItems="center" padding="12px">
                  <Flex
                    as="button"
                    {...flyoutActionsStyles}
                    onClick={() => {
                      if (
                        activeChat.members &&
                        activeChat?.members?.length < 50
                      )
                        handleAddLearner();
                      else {
                        toast({
                          title: "Ooops sorry",
                          description:
                            "You cannot add more than 50 participant",
                        });
                      }
                    }}
                  >
                    <AddLearnersIcon />
                    <Text>Add Learners</Text>
                  </Flex>

                  <Flex as="button" {...flyoutActionsStyles}>
                    <ReportIcon />
                    <Text>Report</Text>
                  </Flex>

                  <Flex
                    as="button"
                    {...flyoutActionsStyles}
                    // onClick={handleDeleteStudyChat}
                  >
                    <LeaveIcon />
                    <Text color={colors.error[50]}>Leave</Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          )}
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatDetailFlyout;
