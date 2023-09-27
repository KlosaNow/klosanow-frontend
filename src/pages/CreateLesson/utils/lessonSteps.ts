import LessonContent from "../components/LessonContent";
import LessonDescription from "../components/LessonDescription";
import LessonTemplate from "../components/LessonTemplate";
import { lessonDescriptionSchema } from "./validationSchema";
// import RecordLesson from "../components/RecordLesson";

export const createLessonSteps = [
  {
    name: "template",
    validationSchema: {},
    Component: LessonTemplate,
  },
  {
    name: "description",
    validationSchema: lessonDescriptionSchema,
    Component: LessonDescription,
  },
  {
    name: "content",
    validationSchema: "",
    Component: LessonContent,
  },
  // {
  //   name: "Record",
  //   validationSchema: "",
  //   Component: RecordLesson,
  // },
];

// title
// note
// content
// contentUrl
// private: bool
// size: number
