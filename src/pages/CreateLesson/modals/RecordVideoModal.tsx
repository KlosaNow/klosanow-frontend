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
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import Draggable from "react-draggable";

import useMediaRecorder from "src/utils/useMediaRecorder";
import { LessonTemplateType } from "src/types";
import { MoveIcon, PauseIcon, RecordIcon, StopRecordIcon } from "../assets";
import { CreateLessonFormContext } from "../context/CreateLessonFormContext";
import { btnStyles } from "../data";
import { PlayIcon } from "src/assets/svgs";
import { FileUploadResponseStatus, uploadFile } from "src/utils/file-upload";

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
  };

  const [state, setState] = React.useState<typeof initialState>(initialState);

  const handleStateUpdate = (newState: Partial<typeof initialState>) =>
    setState((state) => ({ ...state, ...newState }));

  const {
    startRecording,
    stopRecording,
    blob,
    mediaStatus,
    pauseRecording,
    resumeRecording,
  } = useMediaRecorder();

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

  const renderRecordingAction = ({
    text,
    icon,
    action,
  }: {
    text: string;
    icon: React.ReactNode;
    action: () => void;
  }) => (
    <Flex
      as="button"
      align="center"
      justify="center"
      flexDir="column"
      gap="2px"
      onClick={action}
    >
      {icon}
      <Text fontSize="12px" color="#fff">
        {text}
      </Text>
    </Flex>
  );

  const handleVideoUpload = async (blob: Blob) => {
    const file = new File([blob], `vid-${form_info.title}${uniqueId("_")}`, {
      type: blob.type,
    });

    const res = await uploadFile(file);
    console.log(res);
    if (res.status === FileUploadResponseStatus.Success) {
      updateCreateLessonFormValues({
        showPreviewVideo: true,
        videoUrl: res.data?.url,
        showRecordLessonModal: false,
        videoSize: res.data?.size,
      });
    } else {
      toast({
        description: "Unable to upload video",
        duration: 3000,
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
        <ModalBody>
          <Flex
            flexDir="column"
            h={"calc(100vh - 90px)"}
            w="full"
            bg="#F8F7FE"
            justify="space-between"
            as="div"
            position="relative"
          >
            {state.useMoveTool ? (
              <Draggable>
                <Box
                  w={{
                    base: "280px",
                    md: "450px",
                  }}
                  h="70px"
                  as="div"
                  border={`1.3px solid #000`}
                  borderRadius="4px"
                  position="absolute"
                  top="0"
                  left="0"
                  zIndex="10"
                  cursor="pointer"
                />
              </Draggable>
            ) : null}

            {mediaStatus === "paused" ? (
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
                  type="button"
                  onClick={resumeRecording}
                  position="absolute"
                  top="50%"
                  right="50%"
                  transform="translateX(-50%)"
                  zIndex="200"
                >
                  <PlayIcon />
                </Box>
              </>
            ) : null}

            <Box
              h="100%"
              padding="24px"
              overflow="scroll"
              className="hide-scroll"
            >
              {template === LessonTemplateType.Slide ? (
                <div
                  className="slide"
                  dangerouslySetInnerHTML={{ __html: slides[state.index] }}
                />
              ) : (
                <>
                  {slides.map((item) => (
                    <div
                      key={uniqueId("slide-item")}
                      className="slide"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </>
              )}
            </Box>

            {slides.length - 1 > 1 ? (
              <Flex
                w="100%"
                align="center"
                justify="center"
                gap="50px"
                h="60px"
              >
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
        </ModalBody>

        <ModalFooter
          flexDir={{
            base: "column",
            md: "row",
          }}
          gap="24px"
          p="8px"
          justifyContent="center"
        >
          <Flex
            bg="#AAAAAA"
            p="7px 16px"
            align="center"
            justify="center"
            gap="32px"
            borderRadius="6px"
          >
            {mediaStatus !== "recording" &&
              mediaStatus !== "paused" &&
              renderRecordingAction({
                text: "Start",
                action: startRecording,
                icon: <RecordIcon />,
              })}

            {mediaStatus === "recording" &&
              renderRecordingAction({
                text: "Stop",
                action: stopRecording,
                icon: <StopRecordIcon />,
              })}

            {mediaStatus === "recording" &&
              renderRecordingAction({
                text: "Pause",
                action: pauseRecording,
                icon: <PauseIcon />,
              })}

            <Flex
              as="button"
              align="center"
              justify="center"
              flexDir="column"
              gap="8px"
              onClick={() =>
                handleStateUpdate({ useMoveTool: !state.useMoveTool })
              }
            >
              <MoveIcon />
              <Text fontSize="12px" color="#fff">
                Move tool
              </Text>
            </Flex>
          </Flex>

          {mediaStatus === "recording" ? null : (
            <Button
              {...btnStyles}
              type="button"
              _hover={{ color: "none" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecordVideoModal;
