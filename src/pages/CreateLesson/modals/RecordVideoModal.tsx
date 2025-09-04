import React from "react";
import "./record.css";
import {
  Box,
  // Button,
  Flex,
  IconButton,
  Modal,
  Tooltip,
  ModalBody,
  ModalContent,
  // ModalFooter,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { capitalize, uniqueId } from "lodash";
import { useMarkerTool } from "./useMarkerTool";
import { FaPen, FaEraser } from "react-icons/fa";
import { MdClear, MdClose } from "react-icons/md";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import Draggable from "react-draggable";
import { GiResize } from "react-icons/gi";
import { RiDragMove2Line } from "react-icons/ri";
import useMediaRecorder from "src/utils/useMediaRecorder";
import { LessonTemplateType } from "src/types";
import { MoveIcon, PauseIcon, RecordIcon, StopRecordIcon } from "../assets";
import { CreateLessonFormContext } from "../context/CreateLessonFormContext";
// import { btnStyles } from "../data";
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
    loadingMessage: "",
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

  const handleStopRecording = async () => {
    handleStateUpdate({
      loading: true,
      loadingMessage: "Uploading...",
    });

    await new Promise<void>((resolve) => {
      stopRecording();
      setTimeout(resolve, 10); // small async delay
    });
  };
  const handleVideoUpload = async (blob: Blob) => {
    handleStateUpdate({
      loading: true,
      loadingMessage: "Submitting Preview...",
    });
    try {
      const file = new File([blob], `vid-${form_info.title}${uniqueId("_")}`, {
        type: blob.type,
      });

      const res = await uploadFile(file);
      if (!res || !res.data || res.status !== FileUploadResponseStatus.Success)
        throw new Error("Something went wrong");

      handleStateUpdate({ loading: false, loadingMessage: "" });
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
      handleStateUpdate({
        useMoveTool: false,
        loadingMessage: "Uploading Video...",
      });
      handleVideoUpload(blob);
    }
  }, [blob]);

  return (
    <Modal isOpen={show} onClose={handleClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <OverlayLoader
          loading={state.loading}
          description={state.loadingMessage || "Setting up preview"}
        />
        <ModalBody>
          <Flex
            flexDir="column"
            h="calc(100vh - 40px)"
            w="full"
            bg="#F8F7FE"
            justify="space-between"
            position="relative">
            {state.useMoveTool && (
              <Draggable handle={state.isRezisable ? ".handle" : ""}>
                <Box
                  w={{ base: "280px", md: "450px" }}
                  h="70px"
                  border="1px solid #ff0000"
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

            {slides.length - 1 > 1 ? (
              <Flex
                w="100%"
                align="center"
                justify="center"
                gap="50px"
                h="60px">
                {state.index > 0 ? (
                  <IconButton
                    aria-label="delete"
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
                    aria-label="delete"
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
            ) : null}
          </Flex>

          <Box position="absolute" right="16px" top="100px" zIndex="99">
            <Flex flexDir="column" gap="8px">
              {/* Marker tools */}
              <Tooltip
                label={state.useMarkerTool ? "Disable Marker" : "Enable Marker"}
                hasArrow>
                <IconButton
                  aria-label="Toggle Marker Tool"
                  icon={<FaPen />}
                  onClick={() =>
                    handleStateUpdate({ useMarkerTool: !state.useMarkerTool })
                  }
                  size="sm"
                  isRound
                  colorScheme={state.useMarkerTool ? "blue" : "gray"}
                />
              </Tooltip>

              {/* Eraser Tool */}
              <Tooltip label="Eraser" hasArrow>
                <IconButton
                  aria-label="Toggle Eraser"
                  icon={<FaEraser />}
                  onClick={() => setHoverErase((prev) => !prev)}
                  isDisabled={!state.useMarkerTool}
                  size="sm"
                  isRound
                  colorScheme={hoverErase ? "red" : "gray"}
                  title={hoverErase ? "Disable Erase" : "Enable Erase"}
                />
              </Tooltip>

              <Tooltip label="Clear Canvas" hasArrow>
                <IconButton
                  aria-label="Clear Canvas"
                  icon={<MdClear />}
                  onClick={clearCanvas}
                  size="sm"
                  isRound
                  title="Clear Canvas"
                />
              </Tooltip>

              {/* Move tool */}
              <Tooltip
                label={
                  state.useMoveTool ? "Disable Move Tool" : "Enable Move Tool"
                }
                hasArrow>
                <IconButton
                  aria-label="Move Tool"
                  icon={<MoveIcon />}
                  onClick={() =>
                    handleStateUpdate({ useMoveTool: !state.useMoveTool })
                  }
                  size="sm"
                  isRound
                  colorScheme={state.useMoveTool ? "purple" : "gray"}
                />
              </Tooltip>
              {/* 
              start/stop/pause recording */}
              {mediaStatus !== "recording" && mediaStatus !== "paused" && (
                <Tooltip label="Start Recording" hasArrow>
                  <IconButton
                    aria-label="Start Recording"
                    icon={<RecordIcon />}
                    onClick={startRecording}
                    size="sm"
                    isRound
                    colorScheme="red"
                  />
                </Tooltip>
              )}

              {mediaStatus === "recording" && (
                <>
                  <Tooltip label="Stop Recording" hasArrow>
                    <IconButton
                      aria-label="Stop Recording"
                      icon={<StopRecordIcon />}
                      onClick={handleStopRecording}
                      size="sm"
                      isRound
                      colorScheme="red"
                      isDisabled={state.loading}
                    />
                  </Tooltip>

                  <Tooltip label="Pause Recording" hasArrow>
                    <IconButton
                      aria-label="Pause Recording"
                      icon={<PauseIcon />}
                      onClick={pauseRecording}
                      size="sm"
                      isRound
                      colorScheme="orange"
                    />
                  </Tooltip>
                </>
              )}

              {mediaStatus !== "recording" && (
                <Tooltip label="Cancel" hasArrow>
                  <IconButton
                    aria-label="Cancel"
                    icon={<MdClose />} //
                    onClick={handleClose}
                    size="sm"
                    isRound
                    colorScheme="blue"
                  />
                </Tooltip>
              )}
            </Flex>
          </Box>
        </ModalBody>
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
