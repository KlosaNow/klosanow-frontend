import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import { AxiosError } from "axios";

const useSignup = () => {
  const signup = async (values: FormikValues) => {
    try {
      const res: any = await axiosBaseInstance.post(`/auth/sign-up`, values);

      return res.data.data;
    } catch (err) {
      throw Error;
    }
  };

  return useMutation<any, AxiosError, FormikValues>(
    ["sign up"],
    (FormikValues) => signup(FormikValues),
    {
      onError: (err: AxiosError) => {
        return err;
      },
    }
  );
};

export default useSignup;
