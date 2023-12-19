import api from "../../services/axiosBaseInstance";
import { AuthResponseInterface } from "./interface";

export const signUpApi = async (
  signUpPayload: object
): Promise<AuthResponseInterface> => {
  const { data } = await api.post("/auth/sign-up", signUpPayload);
  return data;
};
