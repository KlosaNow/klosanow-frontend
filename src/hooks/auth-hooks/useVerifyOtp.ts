import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { AxiosError } from "axios";
import { authResponseInterface } from "../../types/auth/authInterface";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store";
import useGetUserData from "../user-hooks/useGetUserData";

const useVerifyOtp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const verifyOtp = async (authResponse: authResponseInterface) => {
    const res = await axiosBaseInstance.post(
      `/auth/verify-otp/${authResponse.token}`,
      {
        otp: `${authResponse.otp}`,
      },
      {
        headers: {
          Authorization: "Bearer " + authResponse.token,
        },
      }
    );

    // @ts-ignore
    if (res?.response?.data?.status === "error") {
      // @ts-ignore
      throw new Error(res?.response.data.message);
    } else {
      const token = res?.data?.data?.token;

      if (token) {
        dispatch(updateToken(res?.data.data));
      }

      return res?.data;
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
