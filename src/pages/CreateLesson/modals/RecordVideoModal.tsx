import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { capitalize, uniqueId } from "lodash";
import { useMarkerTool } from "./useMarkerTool";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import Draggable from "react-draggable";
import { GiResize } from "react-icons/gi";
import { RiDragMove2Line } from "react-icons/ri";
import useMediaRecorder from "src/utils/useMediaRecorder";
import { LessonTemplateType } from "src/types";
import { MoveIcon, PauseIcon, RecordIcon, StopRecordIcon } from "../assets";
import { CreateLessonFormContext } from "../context/CreateLessonFormContext";
import { btnStyles } from "../data";
import { PlayIcon } from "src/assets/svgs";
import { FileUploadResponseStatus, uploadFile } from "src/utils/file-upload";
import OverlayLoader from "src/components/OverlayLoader/OverlayLoader";
import { setFileUrl } from "src/utils/constant";

interface RecordVideoModalProps {
  show: boolean;
  handleClose: () => void;
}

const RecordVideoModal: React.FC<RecordVideoModalProps> = ({
  show,
  handleClose,
}) => {
  const toast = useToast();

  const initialState = {
    index: 0,
    useMoveTool: false,
    useMarkerTool: false,
    loading: false,
    x: 0,
    y: 0,
    width: 320,
    height: 200,
    isRezisable: false,
  };

  const [state, setState] = React.useState(initialState);
  const [hoverErase, setHoverErase] = React.useState(false);

  const handleStateUpdate = (newState: Partial<typeof initialState>) =>
    setState((prev) => ({ ...prev, ...newState }));

  const {
    startRecording,
    stopRecording,
    blob,
    mediaStatus,
    pauseRecording,
    resumeRecording,
  } = useMediaRecorder();

  const { clearCanvas } = useMarkerTool(
    state.useMarkerTool,
    "record-slide-container",
    hoverErase
  );

  const { template, content, form_info, updateCreateLessonFormValues } =
    React.useContext(CreateLessonFormContext);

  const initialSlide = `
    <p style='font-size: 32px; font-weight: 500'>${capitalize(
      form_info.title
    )}</p>
    <p style='font-size: 18px; margin-top: 12px'>
      ${form_info.description}
    </p>
    <div class='slide-img-container'>
      <img
        src=${form_info.thumbnailUrl}
        alt=${form_info.title}
        class='slide-img'
      />
    </div>
  `;

  const slides = [initialSlide, ...content];

  const handleVideoUpload = async (blob: Blob) => {
    handleStateUpdate({ loading: true });
    try {
      const file = new File([blob], `vid-${form_info.title}${uniqueId("_")}`, {
        type: blob.type,
      });

      const res = await uploadFile(file);
      if (!res || !res.data || res.status !== FileUploadResponseStatus.Success)
        throw new Error("Something went wrong");

      handleStateUpdate({ loading: false });
      updateCreateLessonFormValues({
        showPreviewVideo: true,
        videoUrl: res.data?.url,
        showRecordLessonModal: false,
        videoSize: res.data?.size,
      });
      setFileUrl("video_url", res.data?.url);
    } catch (error: any) {
      handleStateUpdate({ loading: false });
      toast({
        description: "Unable to upload video",
        title:
          error.message ?? error.response?.message ?? "Something went wrong",
        duration: 2500,
        status: "error",
        position: "top-right",
      });

      updateCreateLessonFormValues({
        showPreviewVideo: false,
        showRecordLessonModal: false,
      });
    }
  };

  React.useEffect(() => {
    if (blob) {
      handleStateUpdate({ useMoveTool: false });
      handleVideoUpload(blob);
    }
  }, [blob]);

  return (
    <Modal isOpen={show} onClose={handleClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <OverlayLoader
          loading={state.loading}
          description="Setting up preview"
        />
        <ModalBody>
          <Flex
            flexDir="column"
            h="calc(100vh - 90px)"
            w="full"
            bg="#F8F7FE"
            justify="space-between"
            position="relative">
            {state.useMoveTool && (
              <Draggable handle={state.isRezisable ? ".handle" : ""}>
                <Box
                  w={{ base: "280px", md: "450px" }}
                  h="70px"
                  border="1.5px solid #ff0000"
                  borderRadius="4px"
                  position="absolute"
                  top="0"
                  left="0"
                  zIndex="10"
                  cursor="pointer"
                  resize="both"
                  overflow="auto">
                  <Box
                    onClick={() =>
                      handleStateUpdate({ isRezisable: !state.isRezisable })
                    }
                    cursor="pointer"
                    p="0 30px 30px 0"
                    w="max-content">
                    {state.isRezisable ? <GiResize /> : <RiDragMove2Line />}
                  </Box>
                </Box>
              </Draggable>
            )}

            {mediaStatus === "paused" && (
              <>
                <Box
                  width="100vw"
                  h="100vh"
                  bg="#000"
                  opacity="0.6"
                  position="fixed"
                  zIndex="100"
                  top="0"
                  right="0"
                />
                <Box
                  as="button"
                  onClick={resumeRecording}
                  position="absolute"
                  top="50%"
                  right="50%"
                  transform="translateX(-50%)"
                  zIndex="200">
                  <PlayIcon />
                </Box>
              </>
            )}

            <Box
              id="record-slide-container"
              h="100%"
              padding="24px"
              overflow="scroll"
              position="relative"
              className="hide-scroll">
              {template === LessonTemplateType.Slide ? (
                <div
                  className="slide"
                  dangerouslySetInnerHTML={{ __html: slides[state.index] }}
                />
              ) : (
                slides.map((item) => (
                  <div
                    key={uniqueId("slide-item")}
                    className="slide"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))
              )}
            </Box>

            {slides.length > 1 && (
              <Flex
                w="100%"
                align="center"
                justify="center"
                gap="50px"
                h="60px">
                {state.index > 0 ? (
                  <IconButton
                    aria-label="prev-slide"
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                    onClick={() =>
                      handleStateUpdate({ index: state.index - 1 })
                    }
                    icon={<MdArrowBackIosNew />}
                  />
                ) : (
                  <Box w="40px" />
                )}
                <Text>
                  Slide {state.index + 1}/{slides.length}
                </Text>
                {state.index < slides.length - 1 ? (
                  <IconButton
                    aria-label="next-slide"
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                    onClick={() =>
                      handleStateUpdate({ index: state.index + 1 })
                    }
                    icon={<MdOutlineArrowForwardIos />}
                  />
                ) : (
                  <Box w="40px" />
                )}
              </Flex>
            )}
          </Flex>

          <Box position="absolute" right="16px" top="100px" zIndex="99">
            <Flex flexDir="column" gap="8px">
              <Button
                size="sm"
                onClick={() =>
                  handleStateUpdate({ useMarkerTool: !state.useMarkerTool })
                }>
                {state.useMarkerTool ? "Disable Marker" : "Enable Marker"}
              </Button>

              <Button
                size="sm"
                onClick={() => setHoverErase((prev) => !prev)}
                isDisabled={!state.useMarkerTool}>
                {hoverErase ? "Disable Erase" : "Enable Erase"}
              </Button>

              <Button size="sm" onClick={clearCanvas}>
                Clear
              </Button>
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter
          flexDir={{ base: "column", md: "row" }}
          gap="24px"
          p="8px"
          justifyContent="center">
          <Flex
            bg="#AAAAAA"
            p="7px 16px"
            align="center"
            justify="center"
            gap="32px"
            borderRadius="6px">
            {mediaStatus !== "recording" && mediaStatus !== "paused" && (
              <Flex
                as="button"
                onClick={startRecording}
                flexDir="column"
                align="center"
                justify="center"
                gap="2px">
                <RecordIcon />
                <Text fontSize="12px" color="#fff">
                  Start
                </Text>
              </Flex>
            )}

            {mediaStatus === "recording" && (
              <>
                <Flex
                  as="button"
                  onClick={stopRecording}
                  flexDir="column"
                  align="center"
                  gap="2px">
                  <StopRecordIcon />
                  <Text fontSize="12px" color="#fff">
                    Stop
                  </Text>
                </Flex>

                <Flex
                  as="button"
                  onClick={pauseRecording}
                  flexDir="column"
                  align="center"
                  gap="2px">
                  <PauseIcon />
                  <Text fontSize="12px" color="#fff">
                    Pause
                  </Text>
                </Flex>
              </>
            )}

            <Flex
              as="button"
              onClick={() =>
                handleStateUpdate({ useMoveTool: !state.useMoveTool })
              }
              flexDir="column"
              align="center"
              gap="8px">
              <MoveIcon />
              <Text fontSize="12px" color="#fff">
                Move tool
              </Text>
            </Flex>
          </Flex>

          {mediaStatus !== "recording" && (
            <Button {...btnStyles()} onClick={handleClose}>
              Cancel
            </Button>
          )}
        </ModalFooter>
      </ModalContent>

      {mediaStatus === "recording" && (
        <Box position="fixed" top="16px" right="16px" zIndex="9999">
          <Flex align="center" gap={2} color="red.500" fontWeight="bold">
            <Box
              w="10px"
              h="10px"
              bg="red.500"
              borderRadius="full"
              animation="blink 1s infinite"
              sx={{
                "@keyframes blink": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.2 },
                },
              }}
            />
            <Text>REC</Text>
          </Flex>
        </Box>
      )}
    </Modal>
  );
};

export default RecordVideoModal;
