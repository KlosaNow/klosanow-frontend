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
import Switch, { SwitchLabel } from "../../../../components/Switch";
import { uniqueId } from "lodash";
import { flyoutActionsStyles } from "../../data/styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { contactsPagePath } from "../../../../data/pageUrl";

const ChatDetailFlyout: React.FC = () => {
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();

  const { activeChat, chatType, isChatDetailFlyout, updateStudyChatValues } =
    React.useContext(StudyChatContext);

  const handleClose = () =>
    updateStudyChatValues({ isChatDetailFlyout: false });

  const isGroupChat = chatType === ChatType.Group;

  const [notification, setNotification] = React.useState(SwitchLabel.Off);

  const handleAddLearner = () => {
    if (!activeChat) return;

    updateStudyChatValues({ isChatDetailFlyout: false });
    navigate(contactsPagePath, {
      state: {
        chatId: activeChat.id,
      },
    });
  };

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
                src={activeChat?.groupImage}
                alt={activeChat?.groupName}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Circle>

            {isGroupChat && (
              <Box maxW="238px" textAlign="center">
                <Text fontSize="20px" fontWeight="500">
                  {activeChat?.groupName}
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
                  {activeChat?.admin.data.name}{" "}
                </Text>
                <Text fontSize="24px" fontWeight="500">
                  {activeChat?.admin.data.phone}{" "}
                </Text>
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
            <Switch onChange={(value) => setNotification(value)} />
          </Flex>

          {isGroupChat && (
            <Box m="20px 0 60px">
              <Box bg={colors.primary[10]} h="120px" p="12px 47px">
                <Text fontSize="14px" fontWeight="500">
                  Created By
                </Text>

                <Flex alignItems="center" gap="8px" mt="20px">
                  <Circle size="50px" bg="#b1b1b1" overflow="hidden">
                    <Image src={activeChat?.admin.data.image} />
                  </Circle>

                  <Flex justifyContent="center" flexDir="column">
                    <Text
                      fontSize={14}
                      fontWeight={500}
                      color="#2A2A2A"
                      lineHeight="17.5px"
                      marginBottom="5px"
                    >
                      {activeChat?.admin.data.name}
                    </Text>

                    <Text
                      fontSize={12}
                      fontWeight={400}
                      color="#555555"
                      lineHeight="15px"
                    >
                      {activeChat?.admin.data.phone}
                    </Text>
                  </Flex>
                </Flex>
              </Box>

              <Box minH="120px" mt="20px" bg={colors.primary[10]} p="12px 47px">
                <Text fontSize="14px" fontWeight="500">
                  Learners
                </Text>

                <Flex flexDir="column" gap="28px" mt="20px">
                  {activeChat?.contacts.map(({ name, imageUrl, id, phone }) => (
                    <Flex
                      alignItems="center"
                      gap="8px"
                      key={uniqueId(`learner-${id}`)}
                    >
                      <Circle size="50px" bg="#b1b1b1" overflow="hidden">
                        <Image src={imageUrl} />
                      </Circle>

                      <Flex justifyContent="center" flexDir="column">
                        <Text
                          fontSize={14}
                          fontWeight={500}
                          color="#2A2A2A"
                          lineHeight="17.5px"
                          marginBottom="5px"
                        >
                          {name}
                        </Text>

                        <Text
                          fontSize={12}
                          fontWeight={400}
                          color="#555555"
                          lineHeight="15px"
                        >
                          {phone}
                        </Text>
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
                    onClick={handleAddLearner}
                  >
                    <AddLearnersIcon />
                    <Text>Add Learners</Text>
                  </Flex>
                  <Flex as="button" {...flyoutActionsStyles}>
                    <ReportIcon />
                    <Text>Report</Text>
                  </Flex>
                  <Flex as="button" {...flyoutActionsStyles}>
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
