import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { createLessonFormPagePath, draftsPagePath } from "src/data/pageUrl";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import DraftCard from "../../components/DraftCard";
import { uniqueId } from "lodash";
import { fetchDrafts } from "src/api-endpoints/lessons";
import { EmptyState, LessonTemplateCard } from "src/components";

const CreateLesson: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const drafts = useStoreSelector((state) => state.lessons["drafts"]);

  const draftsData = drafts.data.data.slice(0, 3) || [];

  useQuery({
    queryKey: ["drafts"],
    queryFn: () => dispatch(fetchDrafts()),
  });

  return (
    <Box py={["2rem", "0px"]} width="full">
      <Box>
        <Text fontWeight={600} display={["none", "block"]} fontSize="32px">
          Create a lesson
        </Text>
        <LessonTemplateCard
          bgColor="#7B58F4"
          buttonText="Start creating"
          buttonTextColor="#7B58F4"
          cardDesc="Present your lesson using templates"
          cardTitle="Create Lesson"
          onClick={() => navigate(createLessonFormPagePath)}
          cardSrc="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Box>

      <Box
        mt="2rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight={500} fontSize={["16px", "24px"]}>
          Your Drafts
        </Text>

        <Text
          as="button"
          onClick={() => navigate(draftsPagePath)}
          textColor="primary.50"
        >
          See all
        </Text>
      </Box>

      {draftsData.length === 0 ? (
        <EmptyState title="draft" link={createLessonFormPagePath} height="sm" />
      ) : (
        <Box mt="2rem">
          {draftsData.map((draft) => (
            <DraftCard key={uniqueId(`draft_${draft.id}`)} draft={draft} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CreateLesson;
