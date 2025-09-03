import { object, string } from "yup";

export const studyGroupInfoValidationSchema = object({
  title: string().required("Please add a group name"),
  description: string(),
});
