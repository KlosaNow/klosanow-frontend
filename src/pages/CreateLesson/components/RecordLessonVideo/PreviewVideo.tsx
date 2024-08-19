import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";
import { DeleteIcon, SaveIcon } from "../../assets/svgs";
import { CreateLessonFormValues } from "src/types";
import { useNavigate } from "react-router-dom";
import { allLessonsPagePath } from "src/data/pageUrl";
// import { postLessons } from "src/api-endpoints/lessons";
// import { postUser } from "src/api-endpoints/user/user.api";

const PreviewVideo = () => {
  const navigate = useNavigate();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [duration, setDuration] = React.useState("");

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

  const getVideoDurationCallback = React.useCallback(() => {
    const video = videoRef.current;
    let vidDuration = 0;
    if (!video) return;

    video.addEventListener("load", () => {
      if (video.duration !== Infinity) {
        vidDuration = video.duration;
      }
    });

    const vidDurArr = vidDuration.toString().split(".");

    const vidHr = vidDurArr[vidDurArr.length - 4] || 0;
    const vidMin = vidDurArr[vidDurArr.length - 3] || 0;
    const vidSec = vidDurArr[vidDurArr.length - 2] || 0;

    const vidDur = `${vidHr}hrs:${vidMin}mins:${vidSec}secs`;

    return setDuration(vidDur);
  }, [videoRef.current]);

  React.useEffect(() => {
    if (!videoRef.current) return;
    getVideoDurationCallback();
  }, [videoRef.current]);

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
        <Text color="#fff" mr="24px" fontWeight={500}>
          {duration}
        </Text>
        <Flex
          as="button"
          align="center"
          justify="center"
          flexDir="column"
          gap="6px"
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
          gap="6px"
          onClick={handleSubmit}
        >
          <SaveIcon />
          <Text fontSize="16px" color="#fff">
            Save
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PreviewVideo;
