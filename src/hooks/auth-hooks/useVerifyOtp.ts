import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { AxiosError } from "axios";
import { authResponseInterface } from "../../types/auth/authInterface";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../../redux/reducers/userSlice";
import { RootState } from "../../redux/store";
import useGetUserData from "../user-hooks/useGetUserData";

const useVerifyOtp = () => {
  const dispatch = useDispatch();

  const verifyOtp = async (authResponse: authResponseInterface) => {
    try {
      const { data } = await axiosBaseInstance.post(
        `/auth/verify-otp`,
        {
          otp: authResponse.otp,
        },
        {
          headers: {
            Authorization: "Bearer " + authResponse.token,
          },
        }
      );

      const token = data?.data?.token;

      if (token) {
        dispatch(updateToken(data.data));
      }

      return data.data;
    } catch (err) {
      return err;
    }
  };

  return useMutation<any, AxiosError, authResponseInterface>(
    ["verify OTP"],
    (authResponse) => verifyOtp(authResponse),
    {
      onError: (err: AxiosError) => {
        return err;
      },
    }
  );
};

export default useVerifyOtp;
