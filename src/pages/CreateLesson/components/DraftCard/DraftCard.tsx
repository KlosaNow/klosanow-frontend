import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Draft } from "src/types";
import { OptionIcon } from "src/assets/svgs";
import { useNavigate } from "react-router-dom";
import { createLessonFormPagePath } from "src/data/pageUrl";
import { setDraftId } from "src/utils/constant";
import { useRef } from "react";

interface DraftCardProps {
  draft: Draft;
  handleDelete: (id: string) => void;
}

const DraftCard: React.FC<DraftCardProps> = ({ draft, handleDelete }) => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const handleContinue = async () => {
    setDraftId(draft._id);
    navigate(createLessonFormPagePath);
  };

  const confirmDelete = () => {
    handleDelete(draft._id);
    onClose();
  };

  return (
    <Flex
      alignContent="center"
      gap="16px"
      borderBottom="1px solid #eee"
      pb="8px">
      <Box
        width={["82px", "255px"]}
        height={["151px"]}
        overflow="hidden"
        minW={{
          base: "152px",
          lg: "255px",
        }}
        bg="#959595">
        <Image src={draft.thumbnailUrl} objectFit="cover" w="100%" h="100%" />
      </Box>

      <Flex
        padding={{
          base: "0",
          md: "8px 24px 8px 0",
        }}
        justify="space-between"
        w="full">
        <Box>
          <Text fontSize="20px" fontWeight="500" color="#000">
            {draft.title || "No title"}
          </Text>
          <Text
            fontSize="16px"
            textColor="black.30"
            maxH="120px"
            textOverflow="ellipsis"
            overflow="hidden">
            {draft.about || "No description"}
          </Text>
        </Box>

        <Popover placement="left-start">
          <PopoverTrigger>
            <IconButton
              aria-label="option"
              bg="transparent"
              icon={<OptionIcon />}
            />
          </PopoverTrigger>

          <PopoverContent w="max-content">
            <Box
              as="button"
              {...btnStyles}
              textAlign="start"
              color="red"
              _hover={{
                bg: "#eee",
              }}
              onClick={onOpen}>
              Delete
            </Box>
            <Box
              as="button"
              {...btnStyles}
              textAlign="start"
              _hover={{
                bg: "#eee",
              }}
              onClick={handleContinue}>
              Continue
            </Box>
          </PopoverContent>
        </Popover>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Draft
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this draft? This action cannot be
              undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default DraftCard;

const btnStyles = {
  width: "full",
  padding: "8px 12px",
  fontWeight: "500",
};
