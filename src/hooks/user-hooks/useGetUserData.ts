import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { FormikValues } from "formik";
import axios, { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateUserData } from "../../redux/reducers/userReducer";

const useGetUserData = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const getUserData = async (userId: string) => {
    try {
      const res: any = await axiosBaseInstance.get(`/user/${userId}`, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });

      if (res.data) {
        dispatch(updateUserData(res.data));
      }

      return res.data.data;
    } catch (err) {
      throw Error;
    }
  };

  return useMutation<any, AxiosError, string>(
    ["user data"],
    (userId) => getUserData(userId),
    {
      onError: (err: AxiosError) => {
        return err;
      },
    }
  );
};

export default useGetUserData;
