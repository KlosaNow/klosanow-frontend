import { useMutation } from "@tanstack/react-query";
import axiosBaseInstance from "../../services/axiosBaseInstance";
import { AxiosError } from "axios";

const useVerifyOtp = () => {
  const verifyOtp = async (otp: number) => {
    try {
      const { data } = await axiosBaseInstance.post(
        `/auth/verify-otp`,
        {
          otp: otp,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      return data;
    } catch (err) {
      return err;
    }
  };

  return useMutation<any, AxiosError, number>(
    ["verify OTP"],
    (otp) => verifyOtp(otp),
    {
      onError: (err: AxiosError) => {
        return err;
      },
    }
  );
};

export default useVerifyOtp;
