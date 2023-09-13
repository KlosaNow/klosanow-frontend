import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import { AxiosError } from "axios";

const useSignin = () => {
  const signin = async (values: FormikValues) => {
    const res = await axiosBaseInstance.post(`/auth/sign-in`, values);

    // @ts-ignore
    if (res?.response?.data?.status === "error") {
      // @ts-ignore
      throw new Error(res?.response.data.message);
    } else {
      return res.data;
    }
  };

  return useMutation<any, AxiosError, FormikValues>(
    ["log in"],
    (FormikValues) => signin(FormikValues)
  );
};

export default useSignin;
