import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import { AxiosError } from "axios";

const useCreateLesson = () => {
  const createLesson = async (values: FormikValues) => {
    const res: any = await axiosBaseInstance.post(`/lesson/create`, values);

    // @ts-ignore
    if (res?.response?.data?.status === "error") {
      // @ts-ignore
      throw new Error(res?.response.data.message);
    } else {
      return res.data;
    }
  };

  return useMutation<any, AxiosError, FormikValues>(
    ["create lesson"],
    (FormikValues) => createLesson(FormikValues)
  );
};

export default useCreateLesson;
