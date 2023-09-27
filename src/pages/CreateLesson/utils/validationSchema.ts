import * as yup from "yup";

export const lessonDescriptionSchema = yup.object().shape({
  lessonTitle: yup.string().required(),
  lessonDescription: yup.string().required(),
  tutorName: yup.string().required(),
  tutorBio: yup.string().required(),
});
