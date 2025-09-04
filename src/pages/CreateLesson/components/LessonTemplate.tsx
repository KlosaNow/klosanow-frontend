import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { LessonTemplateCard } from "../../../components";
import { CreateLessonFormStepsType, LessonTemplateType } from "../../../types";
import { CreateLessonFormContext } from "../context/CreateLessonFormContext";

const LessonTemplate: React.FC = () => {
  const { updateCreateLessonFormValues } = React.useContext(
    CreateLessonFormContext
  );

  const handleNavigate = (type: LessonTemplateType) => {
    if (type) {
      updateCreateLessonFormValues({
        template: type,
        activeStep: CreateLessonFormStepsType.FormInfo,
        hasFormStarted: true,
      });
    }
  };

  return (
    <Box>
      <Text
        fontSize={["18px", "32px"]}
        fontWeight={["600", "500"]}
        textColor={["primary.50", "black.100"]}>
        Choose a Template
      </Text>

      <Box my={["80px", "0px"]}>
        <Box marginBottom={["80px", "50px"]}>
          <LessonTemplateCard
            bgColor="primary.50"
            buttonText="Use template"
            buttonTextColor="primary.70"
            cardTitle="Slides"
            cardDesc="Present your lesson in bite size sections for your students"
            cardSrc="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            onClick={() => handleNavigate(LessonTemplateType.Slide)}
          />
        </Box>

        <LessonTemplateCard
          bgColor="secondary.70"
          buttonText="Use template"
          buttonTextColor="secondary.70"
          cardTitle="Unending Scroll"
          cardDesc="Present your lesson in bite size sections for your students"
          cardSrc="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          onClick={() => handleNavigate(LessonTemplateType.Scroll)}
        />
      </Box>
    </Box>
  );
};

export default LessonTemplate;
