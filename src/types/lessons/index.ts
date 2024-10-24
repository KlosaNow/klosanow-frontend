import { _token } from "../../utils/axios";
import { Payload } from "../generics";

export enum LessonType {
  Created = "created",
  Saved = "saved",
}

export enum LessonTemplateType {
  Slide = "slide",
  Scroll = "scroll",
}

export enum CreateLessonFormStepsType {
  Template = "template",
  FormInfo = "form-info",
  Content = "content",
  Record = "record",
}

export interface LessonContentAction {
  handleDraft: () => void;
  handleBack: () => void;
  handleProceed: () => void;
  handleTooltip?: (x: boolean) => void;
}

export interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
  videoSize: number;
  content: Array<string>;
  about: string;
  tag: string;
  isPrivate: boolean;
  thumbnailUrl: string;
  thumbnailSize: number;
  tutor_bio: string;
  tutor_name: string;
  user: {
    _id: string;
    name: string;
    bio: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CreateLessonFormValues {
  title: string;
  videoUrl: string;
  videoSize: number;
  content: Array<string>;
  about: string;
  thumbnailUrl: string;
  thumbnailSize: number;
  tag: string;
  draftId?: string;
}

export interface Draft {
  _id: string;
  template: LessonTemplateType;
  content?: Array<string>;
  title?: string;
  about?: string;
  thumbnailUrl?: string;
  thumbnailSize?: number;
}

export interface LessonPayload {
  lessons: Payload<Array<Lesson>>;
  drafts: Payload<Array<Draft>>;
}
