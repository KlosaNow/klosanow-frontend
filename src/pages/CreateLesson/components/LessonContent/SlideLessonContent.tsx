import React from "react";
import { Flex, Button, IconButton, Text } from "@chakra-ui/react";
import { uniqueId } from "lodash";
import { AiFillDelete } from "react-icons/ai";
import { CreateLessonFormStepsType } from "src/types";
import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";
import { colors } from "src/data/colors";
import { getLessonContentActions } from "../../data";
// import { saveToDrafts, updateDraft } from "src/api-endpoints/lessons";
import { draftsPagePath } from "src/data/pageUrl";
import { useNavigate } from "react-router-dom";

interface LessonDescriptionState {
  index: number;
  value: string;
  isEditing: boolean;
  content: Array<string>;
}

const Editor = React.lazy(() => import("./Editor"));

const SlideLessonContent: React.FC = () => {
  const navigate = useNavigate();

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
  };
  const [state, setState] = React.useState(intialState);

  const handleStateUpdate = (newState: Partial<LessonDescriptionState>) =>
    setState((state) => ({ ...state, ...newState }));

  const handleProceed = () =>
    updateCreateLessonFormValues({
      activeStep: CreateLessonFormStepsType.Record,
      content: state.content,
    });

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
    const formData = {
      ...form_info,
      about: form_info.description,
      template,
    };

    // if (draft_id) {
    //   await updateDraft(draft_id, formData);
    // } else {
    //   await saveToDrafts(formData);
    // }

    if (draft_id) {
      // await updateDraft(draft_id, formData);
      console.log({ draft_id, ...formData });
    } else {
      // await saveToDrafts(formData);
      console.log(formData);
    }

    navigate(draftsPagePath);
  };

  const renderActions = getLessonContentActions(
    {
      handleDraft,
      handleBack: () =>
        updateCreateLessonFormValues({
          activeStep: CreateLessonFormStepsType.FormInfo,
        }),
      handleProceed,
    },
    state.content.length <= 1
  );

  return (
    <>
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
        }}
      >
        <Editor
          value={state.value}
          placeholder="Your lesson content goes in here..."
          onChange={(value) => handleStateUpdate({ value })}
        />

        <Flex flexDir="column" gap="24px" w="100%" maxW="200px">
          <Button
            onClick={() =>
              state.isEditing ? handleUpdateSlide() : handleAddSlide()
            }
            w="100%"
            isDisabled={state.value === ""}
            _disabled={{
              cursor: "not-allowed",
            }}
          >
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
                  justify="space-between"
                >
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

      {renderActions}
    </>
  );
};

export default SlideLessonContent;
