import { Box, Text } from "@chakra-ui/react";
import {
  CreateLessonCard,
  LessonDraftCard,
} from "../../components/LessonCards";
import { draftData } from "./components/lessonData";

export default function Drafts() {
  return (
    <Box py={["2rem", "0px"]} width="full">
      <Box>
        <Text fontWeight={600} display={["none", "block"]} fontSize="32px">
          Create a lesson
        </Text>
        <CreateLessonCard
          bgColor="#7B58F4"
          buttonText="Start creating"
          buttonTextColor="#7B58F4"
          cardDesc="Present your lesson using templates"
          cardTitle="Create Lesson"
          buttonLink="/create-lesson"
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
