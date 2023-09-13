import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import { AxiosError } from "axios";

const useSignup = () => {
  const signup = async (values: FormikValues) => {
    const res: any = await axiosBaseInstance.post(`/auth/sign-up`, values);

    // @ts-ignore
    if (res?.response?.data?.status === "error") {
      // @ts-ignore
      throw new Error(res?.response.data.message);
    } else {
      return res.data;
    }
  };

  return useMutation<any, AxiosError, FormikValues>(
    ["sign up"],
    (FormikValues) => signup(FormikValues)
  );
};

export default useSignup;
