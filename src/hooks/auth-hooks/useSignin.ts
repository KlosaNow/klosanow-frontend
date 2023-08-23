import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import { AxiosError } from "axios";

const useSignin = () => {
  const signin = async (values: FormikValues) => {
    try {
      const { data } = await axiosBaseInstance.post(`/auth/sign-in`, values);

      return data.data;
    } catch (err) {
      return err;
    }
  };

  return useMutation<any, AxiosError, FormikValues>(
    ["log in"],
    (FormikValues) => signin(FormikValues),
    {
      onError: (err: AxiosError) => {
        return err;
      },
    }
  );
};

export default useSignin;
