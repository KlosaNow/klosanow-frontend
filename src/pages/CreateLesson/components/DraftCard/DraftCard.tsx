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
} from "@chakra-ui/react";
import { Draft } from "src/types";
import { OptionIcon } from "src/assets/svgs";
import { deleteDraft, fetchDrafts } from "src/api-endpoints/lessons";
import { useStoreDispatch } from "src/redux/hooks";
import { useNavigate } from "react-router-dom";
import { createLessonFormPagePath } from "src/data/pageUrl";
import { setDraftId } from "src/utils/constant";

interface DraftCardProps {
  draft: Draft;
}

const DraftCard: React.FC<DraftCardProps> = ({ draft }) => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleContinue = async () => {
    setDraftId(draft.id);
    navigate(createLessonFormPagePath);
  };

  const handleDelete = async () => {
    const res = await deleteDraft(draft.id);

    if (!res) return;

    dispatch(fetchDrafts());
  };
  return (
    <Flex
      alignContent="center"
      gap="16px"
      borderBottom="1px solid #eee"
      pb="8px"
    >
      <Box
        width={["82px", "255px"]}
        height={["151px"]}
        overflow="hidden"
        minW={{
          base: "152px",
          lg: "255px",
        }}
        bg="#959595"
      >
        <Image src={draft.thumbnail} objectFit="cover" w="100%" h="100%" />
      </Box>

      <Flex
        padding={{
          base: "0",
          md: "8px 24px 8px 0",
        }}
        justify="space-between"
        w="full"
      >
        <Box>
          <Text fontSize="20px" fontWeight="500" color="#000">
            {draft.title || "No title"}
          </Text>
          <Text
            fontSize="16px"
            textColor="black.30"
            maxH="120px"
            textOverflow="ellipsis"
            overflow="hidden"
          >
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
              _hover={{
                bg: "#eee",
              }}
              onClick={handleDelete}
            >
              Delete
            </Box>
            <Box
              as="button"
              {...btnStyles}
              textAlign="start"
              _hover={{
                bg: "#eee",
              }}
              onClick={handleContinue}
            >
              Continue
            </Box>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
};

export default DraftCard;

const btnStyles = {
  width: "full",
  padding: "8px 12px",
  fontWeight: "500",
};
