import { Box, Text } from "@chakra-ui/react";
import {
  CreateLessonCard,
  LessonDraftCard,
} from "../../components/LessonCards";
import { draftData } from "./lessonData";

export default function CreateLesson() {
  return (
    <Box py="2rem">
      <Box>
        <CreateLessonCard
          bgColor="#7B58F4"
          buttonText="Start creating"
          buttonTextColor="#7B58F4"
          cardDesc="Present your lesson using templates"
          cardTitle="Create Lesson"
          buttonLink="/create-lesson/select-template"
          cardSrc="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Box>

      <Box
        mt="2rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight={500}>Your Drafts</Text>
        <Text textColor="primary.50">See all</Text>
      </Box>
      <Box mt="2rem">
        {draftData.map((draft) => (
          <LessonDraftCard
            key={draft.title}
            draftSrc={draft.src}
            draftTitle={draft.title}
            draftDescription={draft.desc}
          />
        ))}
      </Box>
    </Box>
  );
}
