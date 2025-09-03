import React from "react";
import { CreateLessonFormStepsType, LessonTemplateType } from "src/types";

export interface CreateLessonFormDefaultValues {
  draft_id: string;
  activeStep: CreateLessonFormStepsType;
  template: LessonTemplateType;
  form_info: {
    title: string;
    description: string;
    thumbnailUrl: string;
    tutor_bio: string;
    tutor_name: string;
    thumbnailSize: number;
  };
  content: Array<string>;
  videoUrl: string;
  videoSize: number;
  showPreviewVideo: boolean;
  showRecordLessonModal: boolean;
  canUpdate: boolean;
  hasFormStarted: boolean;
}

interface CreateLessonFormDefaultMethod {
  updateCreateLessonFormValues: (
    x: Partial<CreateLessonFormDefaultValues>
  ) => void;
}

export const DefaultFormValues: CreateLessonFormDefaultValues = {
  draft_id: "",
  activeStep: CreateLessonFormStepsType.Template,
  template: LessonTemplateType.Slide,
  form_info: {
    title: "",
    description: "",
    thumbnailUrl: "",
    tutor_bio: "",
    tutor_name: "",
    thumbnailSize: 0,
  },
  content: [],
  videoSize: 0,
  videoUrl: "",
  showPreviewVideo: false,
  showRecordLessonModal: false,
  canUpdate: false,
  hasFormStarted: false,
};

const DefaultFormMethods: CreateLessonFormDefaultMethod = {
  updateCreateLessonFormValues: () => null,
};

export const CreateLessonFormContext = React.createContext({
  ...DefaultFormValues,
  ...DefaultFormMethods,
});

CreateLessonFormContext.displayName = "CreateLessonForm";
