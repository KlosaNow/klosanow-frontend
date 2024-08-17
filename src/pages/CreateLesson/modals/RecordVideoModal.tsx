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
} from "@chakra-ui/react";
import { capitalize, uniqueId } from "lodash";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import Draggable from "react-draggable";

import useMediaRecorder from "src/utils/useMediaRecorder";
import { LessonTemplateType } from "src/types";
import { MoveIcon, RecordIcon, StopRecordIcon } from "../assets";
import { CreateLessonFormContext } from "../context/CreateLessonFormContext";
import { btnStyles } from "../data";

interface RecordVideoModalProps {
  show: boolean;
  handleClose: () => void;
}

const RecordVideoModal: React.FC<RecordVideoModalProps> = ({
  show,
  handleClose,
}) => {
  const initialState = {
    index: 0,
    useMoveTool: false,
  };

  const [state, setState] = React.useState<typeof initialState>(initialState);

  const handleStateUpdate = (newState: Partial<typeof initialState>) =>
    setState((state) => ({ ...state, ...newState }));

  const { startRecording, stopRecording, blob, mediaStatus } =
    useMediaRecorder();

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
        src=${form_info.thumbnail}
        alt=${form_info.title}
        class='slide-img'
      />
    </div>
  `;

  const slides = [initialSlide, ...content];

  const renderRecordingAction = (
    text: string,
    action: () => void,
    props?: {
      isStop?: boolean;
      isDisabled?: boolean;
    }
  ) => (
    <Flex
      as="button"
      align="center"
      justify="center"
      flexDir="column"
      gap="8px"
      onClick={action}
      disabled={props?.isDisabled}
      _disabled={{
        cursor: "not-allowed",
      }}
    >
      {props?.isStop ? <StopRecordIcon /> : <RecordIcon />}
      <Text fontSize="16px" color="#fff">
        {text}
      </Text>
    </Flex>
  );

  React.useEffect(() => {
    if (blob) {
      updateCreateLessonFormValues({
        showPreviewVideo: true,
        videoUrl: URL.createObjectURL(blob),
        showRecordLessonModal: false,
        videoSize: blob.size,
      });
    }
  }, [blob]);

  return (
    <Modal isOpen={show} onClose={handleClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalBody maxH={"calc(100vh - 105px)"} overflow="scroll">
          <Flex
            flexDir="column"
            minH={{
              base: "calc(100vh - 120px)",
              md: "calc(100vh - 105px)",
            }}
            h="100%"
            w="full"
            bg="#F8F7FE"
            justify="space-between"
            as="div"
            position="relative"
            overflow="hidden"
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

            <Box
              h="100%"
              mt="30px"
              padding="0 26px"
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

            {slides.length - 1 > 1 && (
              <Flex
                w="100%"
                align="center"
                justify="center"
                gap="50px"
                h="86px"
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
            )}
          </Flex>
        </ModalBody>

        <ModalFooter
          flexDir={{
            base: "column",
            md: "row",
          }}
          gap="24px"
          justifyContent="center"
        >
          <Flex
            bg="#AAAAAA"
            h={{
              base: "90px",
              md: "70px",
            }}
            p="0 24px"
            align="center"
            justify="center"
            gap="32px"
            borderRadius="6px"
          >
            {renderRecordingAction("Start record", startRecording, {
              isDisabled: mediaStatus === "recording",
            })}
            {renderRecordingAction("Stop record", stopRecording, {
              isStop: true,
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
              <Text fontSize="16px" color="#fff">
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
