import LessonContent from "../components/LessonContent";
import LessonDescription from "../components/LessonDescription";
import LessonTemplate from "../components/LessonTemplate";
import RecordLesson from "../components/RecordLesson";

export const createLessonSteps = [
  {
    name: "template",
    validationSchema: {},
    Component: LessonTemplate,
  },
  {
    name: "description",
    validationSchema: "",
    Component: LessonDescription,
  },
  {
    name: "content",
    validationSchema: "",
    Component: LessonContent,
  },
  {
    name: "Record",
    validationSchema: "",
    Component: RecordLesson,
  },
];

// title
// note
// content
// contentUrl
// private: bool
// size: number
