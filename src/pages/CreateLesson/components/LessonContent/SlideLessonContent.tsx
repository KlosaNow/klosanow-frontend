import React from "react";
import {
  Flex,
  Button,
  IconButton,
  Text,
  Box,
  useToast,
} from "@chakra-ui/react";
import { uniqueId } from "lodash";
import { AiFillDelete } from "react-icons/ai";
import { CreateLessonFormStepsType } from "src/types";
import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";
import { colors } from "src/data/colors";
import { getLessonContentActions } from "../../data";
import { saveToDrafts, updateDraft } from "src/api-endpoints/lessons";
import { draftsPagePath } from "src/data/pageUrl";
import { useNavigate } from "react-router-dom";
import OverlayLoader from "src/components/OverlayLoader";
import { clearFileUrl } from "src/utils/constant";

interface LessonDescriptionState {
  index: number;
  value: string;
  isEditing: boolean;
  content: Array<string>;
  showTooltip: boolean;
  loading: boolean;
}

const Editor = React.lazy(() => import("./Editor"));

const SlideLessonContent: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const {
    draft_id,
    template,
    form_info,
    content,
    updateCreateLessonFormValues,
  } = React.useContext(CreateLessonFormContext);

  const intialState: LessonDescriptionState = {
    index: content.length || 0,
    value: "",
    isEditing: false,
    content: content || [],
    showTooltip: false,
    loading: false,
  };
  const [state, setState] = React.useState(intialState);

  const handleStateUpdate = (newState: Partial<LessonDescriptionState>) =>
    setState((state) => ({ ...state, ...newState }));

  const handleProceed = () => {
    const trimmedValue = state.value.trim();
    const isAddingNewSlide = !state.isEditing && trimmedValue !== "";
    const currentSlideIndex = state.index;
    let updatedContent = [...state.content];

    // Add new slide only if valid and not editing
    if (
      isAddingNewSlide &&
      !updatedContent.some((slide) => slide.trim() === trimmedValue)
    ) {
      updatedContent.push(trimmedValue);
    }

    const totalSlides = updatedContent.length;

    // If user is not yet on the last slide, move to the next one
    if (currentSlideIndex < totalSlides - 1) {
      handleStateUpdate({
        content: updatedContent,
        index: currentSlideIndex + 1,
        value: updatedContent[currentSlideIndex + 1] || "",
        isEditing: true,
      });
      return;
    }

    // Final validation before proceeding to next page/step
    if (updatedContent.length === 0) {
      toast({
        status: "error",
        description: "You must add at least one slide.",
      });
      return;
    }

    // Proceed to the next step (Record Page)
    updateCreateLessonFormValues({
      activeStep: CreateLessonFormStepsType.Record,
      content: updatedContent,
    });

    // Reset state for next use
    handleStateUpdate({
      content: updatedContent,
      isEditing: false,
      index: 0,
      value: "",
    });
  };

  const handleAddSlide = () => {
    let updateContent = [...state.content];
    if (!state.value) return;

    if (!state.isEditing && state.value) {
      updateContent = [...updateContent, state.value];
    }

    handleStateUpdate({
      index: state.index + 1,
      content: updateContent,
      value: "",
      isEditing: false,
    });
  };

  const handleUpdateSlide = () => {
    if (state.isEditing && state.value) {
      const updateContent = state.content.map((item, index) => {
        return state.index === index ? state.value : item;
      });

      handleStateUpdate({
        index: state.content.length,
        content: updateContent,
        value: "",
        isEditing: false,
      });
    }
  };

  const handleRemove = (index: number) => {
    const updateContent = [...state.content.filter((_, ix) => ix !== index)];

    handleStateUpdate({
      content: updateContent,
    });
  };

  const handleDraft = async () => {
    handleStateUpdate({ loading: true });
    try {
      const formData = {
        ...form_info,
        about: form_info.description,
        content: state.content,
        template,
      };

      const draftAction = () =>
        draft_id ? updateDraft(draft_id, formData) : saveToDrafts(formData);

      const res = await draftAction();

      if (!res) throw new Error("Unable to save draft");
      handleStateUpdate({ loading: false });
      clearFileUrl("thumbnail_url");
      navigate(draftsPagePath);
    } catch (error: any) {
      handleStateUpdate({ loading: false });
      toast({
        title: error.message ?? error.response ?? "Something went wrong",
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    }
  };

  const renderActions = getLessonContentActions(
    {
      handleDraft,
      handleBack: () => {
        if (state.index > 0) {
          handleStateUpdate({
            index: state.index - 1,
            value: state.content[state.index - 1] || "",
            isEditing: true,
          });
        } else {
          updateCreateLessonFormValues({
            activeStep: CreateLessonFormStepsType.FormInfo,
          });
        }
      },
      handleProceed,
      handleTooltip: (showTooltip) => handleStateUpdate({ showTooltip }),
    },
    state.content.length === 0 && !state.value.trim()
  );

  const isTooltipActive = state.showTooltip && state.content.length < 1;

  return (
    <>
      <OverlayLoader loading={state.loading} description="Processing draft" />
      <Text fontSize="32px" fontWeight="500" mb="24px">
        Create your lessons
      </Text>

      <Text fontSize="20px" mb="8px">
        Slide {state.index < 10 ? "0" : ""}
        {state.index + 1}
      </Text>

      <Flex
        gap="24px"
        flexDir={{
          base: "column-reverse",
          md: "row",
        }}>
        <Flex
          flex="1"
          minW="0"
          maxW="100%"
          overflow="hidden"
          sx={{
            ".editor-container": {
              width: "100%",
              maxWidth: "800px",
              minHeight: "300px",
              border: " 1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              backgroundColor: "fff",
            },
          }}>
          <Box className="editor-container">
            <Editor
              value={state.value}
              placeholder="Your lesson content goes in here..."
              onChange={(value) => handleStateUpdate({ value })}
            />
          </Box>
        </Flex>

        <Flex flexDir="column" gap="24px" w="100%" maxW="200px">
          <Button
            onClick={() =>
              state.isEditing ? handleUpdateSlide() : handleAddSlide()
            }
            w="100%"
            isDisabled={state.value === ""}
            _disabled={{
              cursor: "not-allowed",
            }}>
            {state.isEditing ? "Update" : "Add"} Slide
          </Button>

          {state.content.length >= 1 && (
            <Flex flexDir="column" gap="12px">
              {state.content.map((item, index) => (
                <Flex
                  cursor="pointer"
                  key={uniqueId("slide")}
                  onClick={() =>
                    handleStateUpdate({
                      value: item,
                      index,
                      isEditing: true,
                    })
                  }
                  border={`1px solid ${colors.primary[5]}`}
                  borderRadius="8px"
                  padding="8px 16px"
                  align="center"
                  justify="space-between">
                  <Text>
                    Slide {index < 10 ? "0" : ""}
                    {index + 1}
                  </Text>

                  <IconButton
                    aria-label="delete"
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                    onClick={() => handleRemove(index)}
                    icon={<AiFillDelete />}
                  />
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>

      <Box position={"relative"}>
        {isTooltipActive && (
          <Box
            position="absolute"
            top="-60px"
            right="10px"
            bg="#eee"
            p="7px"
            borderRadius="4px"
            maxW="200px">
            <Text fontSize="12px">Slides should be at least one,</Text>
            <Text fontSize="12px">add at least one slide to proceed</Text>
          </Box>
        )}

        {renderActions}
      </Box>
    </>
  );
};

export default SlideLessonContent;
