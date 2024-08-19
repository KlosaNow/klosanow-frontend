import { Box, Flex, Button } from "@chakra-ui/react";
import { colors } from "../../../data/colors";
import { CreateLessonFormStepsType, LessonContentAction } from "../../../types";
import LessonContent from "../components/LessonContent";
import LessonFormInfo from "../components/LessonFormInfo";
import LessonTemplate from "../components/LessonTemplate";
import RecordLessonVideo from "../components/RecordLessonVideo";

export const CREATE_LESSON_STEPS = {
  [CreateLessonFormStepsType.Template]: {
    name: CreateLessonFormStepsType.Template,
    component: <LessonTemplate />,
  },
  [CreateLessonFormStepsType.FormInfo]: {
    name: CreateLessonFormStepsType.FormInfo,
    component: <LessonFormInfo />,
  },
  [CreateLessonFormStepsType.Content]: {
    name: CreateLessonFormStepsType.Content,
    component: <LessonContent />,
  },
  [CreateLessonFormStepsType.Record]: {
    name: CreateLessonFormStepsType.Record,
    component: <RecordLessonVideo />,
  },
};

export const getLessonContentActions = (
  actions: LessonContentAction,
  isDisabled?: boolean
) => (
  <Box
    mt={{
      base: "120px",
      md: "64px",
    }}
  >
    <Flex
      align="center"
      gap="24px"
      justifyContent="space-between"
      flexDir={{
        base: "column",
        md: "row",
      }}
    >
      <Button
        {...btnStyles}
        _hover={{ color: "none" }}
        type="button"
        onClick={actions.handleDraft}
      >
        Save to drafts
      </Button>

      <Flex
        gap="16px 24px"
        w={{
          base: "100%",
          md: "max-content",
        }}
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Button
          {...btnStyles}
          type="button"
          _hover={{ color: "none" }}
          onClick={actions.handleBack}
        >
          Back
        </Button>

        <Button
          {...btnStyles}
          bg={colors.primary[50]}
          color={colors.neutral[10]}
          type="button"
          isDisabled={isDisabled}
          _disabled={{
            bg: colors.primary[10],
            borderColor: colors.primary[10],
            cursor: "not-allowed",
          }}
          _hover={{ opacity: 0.8 }}
          onClick={actions.handleProceed}
          onMouseOver={() =>
            actions.handleTooltip && actions.handleTooltip(true)
          }
          onMouseLeave={() =>
            actions.handleTooltip && actions.handleTooltip(false)
          }
        >
          Proceed
        </Button>
      </Flex>
    </Flex>
  </Box>
);

export const btnStyles = {
  borderColor: colors.primary[50],
  color: colors.primary[50],
  variant: "outline",
  width: {
    base: "100%",
    md: "200px",
  },
  h: "50px",
};
