import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useGetUserData = () => {
  const user = useSelector((state: RootState) => state.user);
  const emailAddrees = localStorage.getItem("email");
  const getUserData = async () => {
    try {
      const res: any = await axiosBaseInstance.get(`/user/get-user/`, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
        params: {
          email: emailAddrees,
        },
      });

      // @ts-ignore
      console.log(res);
      // console.log(res.headers);
      return res.data.data;
    } catch (err) {
      throw Error;
    }
  };

  return useMutation<any, AxiosError>(["user data"], () => getUserData(), {
    onError: (err: AxiosError) => {
      return err;
    },
  });
};

export default useGetUserData;
