import api from "../../services/axiosBaseInstance";
import { AuthResponseInterface, SignInResponse } from "./interface";

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