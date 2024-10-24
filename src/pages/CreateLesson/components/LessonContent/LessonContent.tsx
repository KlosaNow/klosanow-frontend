import React from "react";

import { LessonTemplateType } from "src/types";
import SlideLessonContent from "./SlideLessonContent";
import ScrollLessonContent from "./ScrollLessonContent";
import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";

const LessonContent: React.FC = () => {
  const { template } = React.useContext(CreateLessonFormContext);

  const LessonContentComponent = {
    [LessonTemplateType.Scroll]: ScrollLessonContent,
    [LessonTemplateType.Slide]: SlideLessonContent,
  }[template];

  return <LessonContentComponent />;
};

export default LessonContent;
