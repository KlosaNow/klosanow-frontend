import { _token } from "../../utils/axios";

export interface AuthResponseInterface {
  status: string;
  message: string;
}

export interface CreateLessonInterface {
  // status: string;
  // message: string;
  // data: {
    title: string,
    about: string,
    content: string,
    videoUrl: string,
    tag: string,
    isPrivate: boolean,
    user: string,
  // }
  // token: string
}
