import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import { AxiosError } from "axios";

const useSignup = () => {
  const signup = async (values: FormikValues) => {
    try {
      const res: any = await axiosBaseInstance.post(`${process.env.VITE_APP_BASE_URL}/auth/sign-up`, values);

      // @ts-ignore
      console.log(res);
      // console.log(res.headers);
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
