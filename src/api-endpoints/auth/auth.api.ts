import { AxiosInstance as Axios } from "../../services/axios";
import { SignUpValues, SignInValues } from "../../types/auth/authInterface";
import {
  AuthResponseInterface,
  SignInResponse,
  VerifyOtpResponse,
  OtpInterface,
} from "./interface";

export const signUpApi = async (
  signUpPayload: SignUpValues
): Promise<AuthResponseInterface> => {
  const { data } = await Axios.post("/auth/sign-up", signUpPayload);
  return data;
};

export const signInApi = async (
  signInPayload: SignInValues
): Promise<SignInResponse> => {
  const { data } = await Axios.post("/auth/sign-in", signInPayload);
  return data;
};

export const verifyOtpApi = async (
  verifyPayload: OtpInterface
): Promise<VerifyOtpResponse> => {
  const { data } = await Axios.post(`/auth/verify-otp/${verifyPayload.token}`, {
    otp: `${verifyPayload.otp}`,
  });
  return data;
};
