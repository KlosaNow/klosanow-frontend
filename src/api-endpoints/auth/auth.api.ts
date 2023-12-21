import api from "../../services/axiosBaseInstance";
import { authResponseInterface } from "../../types/auth/authInterface";

import {
  AuthResponseInterface,
  SignInResponse,
  VerifyOtpResponse,
} from "./interface";

export const signUpApi = async (
  signUpPayload: object
): Promise<AuthResponseInterface> => {
  const { data } = await api.post("/auth/sign-up", signUpPayload);
  return data;
};

export const signInApi = async (
  signInPayload: object
): Promise<SignInResponse> => {
  const { data } = await api.post("/auth/sign-in", signInPayload);
  return data;
};

export const verifyOtpApi = async (
  verifyPayload: authResponseInterface
): Promise<VerifyOtpResponse> => {
  const { data } = await api.post(
    `/auth/verify-otp/${verifyPayload.token}`,
    { otp: `${verifyPayload.otp}` },
    {
      headers: {
        Authorization: "Bearer " + verifyPayload.token,
      },
    }
  );
  return data;
};
