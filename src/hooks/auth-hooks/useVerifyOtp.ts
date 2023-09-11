import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { AxiosError } from "axios";
import { authResponseInterface } from "../../types/auth/authInterface";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../../redux/reducers/userSlice";
import { RootState } from "../../redux/store";

const useVerifyOtp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
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
      if (data.data.token) {
        dispatch(updateToken(data.data));
      }

      return data;
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
