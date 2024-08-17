import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";
import { DeleteIcon, SaveIcon } from "../../assets/svgs";
import { CreateLessonFormValues } from "src/types";
import { postLessons } from "src/api-endpoints/lessons";
import { useNavigate } from "react-router-dom";
import { allLessonsPagePath } from "src/data/pageUrl";
import { postUser } from "src/api-endpoints/user/user.api";

const PreviewVideo = () => {
  const navigate = useNavigate();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const {
    canUpdate,
    draft_id,
    videoUrl,
    videoSize,
    form_info,
    content,
    updateCreateLessonFormValues,
  } = React.useContext(CreateLessonFormContext);

  const handleSubmit = async () => {
    const formData: CreateLessonFormValues = {
      title: form_info.title,
      about: form_info.description,
      thumbnailUrl: form_info.thumbnail,
      thumbnailSize: form_info.thumbnailSize,
      tag: "uncategorized",
      videoSize,
      videoUrl,
      content,
    };

    if (canUpdate) {
      const userData = {
        name: form_info.tutor_name,
        bio: form_info.tutor_bio,
      };

      console.log("User data", userData);
      // await postUser(userData)
    }
    if (draft_id) {
      // await postLessons({ ...formData, draftId: draft_id });
      console.log("form data with id", { ...formData, draftId: draft_id });
    } else {
      // await postLessons(formData);
      console.log("form data", formData);
    }

    navigate(allLessonsPagePath);
  };

  return (
    <Flex flexDir="column" align="center">
      <Box
        width="full"
        h={{
          base: "max-content",
          md: "600px",
        }}
        position="relative"
        bg="#000"
        ref={containerRef}
      >
        <video
          width="100%"
          height="100%"
          src={videoUrl}
          ref={videoRef}
          style={{ opacity: 0.8, maxHeight: 600 }}
          controls
        />
      </Box>

      <Flex
        bg="#707070"
        h="70px"
        w="100%"
        maxW="704px"
        mt="30px"
        align="center"
        justify="center"
        gap="32px"
      >
        <Flex
          as="button"
          align="center"
          justify="center"
          flexDir="column"
          gap="8px"
          onClick={() =>
            updateCreateLessonFormValues({
              showPreviewVideo: false,
              videoUrl: "",
              videoSize: 0,
            })
          }
        >
          <DeleteIcon />
          <Text fontSize="16px" color="#fff">
            Delete
          </Text>
        </Flex>

        <Flex
          as="button"
          align="center"
          justify="center"
          flexDir="column"
          gap="8px"
          onClick={handleSubmit}
        >
          <SaveIcon />
          <Text fontSize="16px" color="#fff">
            Submit
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PreviewVideo;
