import { Box, Center, Spinner, Text, useToast } from "@chakra-ui/react";
import { LessonDraftCard, LessonTemplateCard } from "../../components";
import { draftData } from "./components/lessonData";
import { useQuery } from "@tanstack/react-query";
import { fetchDrafts } from "../../api-endpoints/lessons";

export default function Drafts() {
  const toast = useToast()
    const FETCH_DRAFTS_RESPONSE = useQuery(['drafts', ""],
      fetchDrafts, {
        onSuccess: () => {
           toast({
          title: 'Drafts fetched successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
    })
      }
    }
    );
  // console.log("FETCH_DRAFTS_RES", FETCH_DRAFTS_RESPONSE?.data?.data)

  const ALL_DRAFTS = FETCH_DRAFTS_RESPONSE?.data?.data?.slice()?.reverse()

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
     
      {FETCH_DRAFTS_RESPONSE?.isLoading ? <Center h="30vh"><Spinner boxSize={20} borderWidth={'3px'} color="#121212" /></Center> : <Box mt="2rem">

        {ALL_DRAFTS?.map((draft, indx) => (
          <LessonDraftCard
            key={indx}
            draftSrc={draft.src}
            draftTitle={draft?.title}
            draftDescription={draft?.content}
          />
        ))}
      </Box>}
    </Box>
  );
}
