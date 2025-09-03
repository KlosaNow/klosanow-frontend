import { AxiosInstance as Axios } from "../../utils/axios";
import {
  SignUpValues,
  SignInValues,
  forgotValues,
  ResetPasswordValues,
} from "../../types/auth/authInterface";
import { AuthResponseInterface, SignInResponse } from "./interface";

export const signUpApi = async (
  signUpPayload: SignUpValues
): Promise<AuthResponseInterface> => {
  const { data } = await Axios.post("/auth/sign-up", signUpPayload);
  return data;
};

export const forgotPasswordApi = async (
  forgetPayload: forgotValues
): Promise<AuthResponseInterface> => {
  const { data } = await Axios.post("/auth/forgot-password", forgetPayload);
  return data;
};

export const ResetPasswordApi = async (
  ResetPayload: ResetPasswordValues
): Promise<AuthResponseInterface> => {
  const { data } = await Axios.post("/auth/reset-password", ResetPayload);
  return data;
};
export const signInApi = async (
  signInPayload: SignInValues
): Promise<SignInResponse> => {
  const { data } = await Axios.post("/auth/sign-in", signInPayload);
  return data;
};
