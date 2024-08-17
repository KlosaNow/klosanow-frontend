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
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  content: Array<string>;
  about: string;
  thumbnail: string;
  tutor_bio: string;
  tutor_name: string;
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
  id: string;
  template: LessonTemplateType;
  content?: Array<string>;
  title?: string;
  about?: string;
  thumbnail?: string;
  thumbnailSize?: number;
}

export interface LessonPayload {
  lessons: Payload<Array<Lesson>>;
  drafts: Payload<Array<Draft>>;
}
