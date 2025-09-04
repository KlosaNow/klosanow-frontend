import { object, string } from "yup";

export const createLessonValidationSchema = object({
  title: string().required("Please enter a valid title"),
  description: string().required("Please enter course description"),
  thumbnailUrl: string().required("Image is required"),
  tutor_bio: string(),
  tutor_name: string(),
});
