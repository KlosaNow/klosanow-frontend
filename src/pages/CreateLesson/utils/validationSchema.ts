import * as yup from "yup";

export const lessonDescriptionSchema = yup.object().shape({
  title: yup.string().required(),
  note: yup.string().required(),
  thumbanail: yup.string().required(),
  tutor: yup.object().shape({
    name: yup.string().required(),
    bio: yup.string().required(),
  }),
});

// title: "",
// note: "",
// thumbnail: "",
// content: "",
// author: {
//   name: "",
//   bio: "",
// },
