import { AxiosInstance as Axios } from "../../utils/axios";
import {
  SignUpValues,
  SignInValues,
  forgotValues,
  ResetPasswordValues,
} from "../../types/auth/authInterface";
import {
  AuthResponseInterface,
  SignInResponse,
  VerifyOtpResponse,
} from "./interface";

export const signUpApi = async (
  signUpPayload: SignUpValues
): Promise<AuthResponseInterface> => {
  const { data } = await Axios.post("/auth/sign-up", signUpPayload);
  return data;
};

export const forgotPasswordApi = async (
  forgetPayload: forgotValues
): Promise<AuthResponseInterface> => {
  console.log("Forgot Password Payload:", forgetPayload);
  const { data } = await Axios.post("/auth/forgot-password", forgetPayload);
  return data;
};

export const ResetPasswordApi = async (
  ResetPayload: ResetPasswordValues
): Promise<AuthResponseInterface> => {
  const { token, newPassword, confirmPassword } = ResetPayload;
  const { data } = await Axios.post(`/auth/reset-password/${token}`, {
    newPassword,
    confirmPassword,
  });
  return data;
};
export const signInApi = async (
  signInPayload: SignInValues
): Promise<SignInResponse> => {
  const { data } = await Axios.post("/auth/sign-in", signInPayload);
  return data;
};

export const verifyOtpApi = async ({
  token,
}: {
  token: string;
}): Promise<VerifyOtpResponse> => {
  const { data } = await Axios.get(`/auth/verify-email/${token}`);

  return data.data;
};
