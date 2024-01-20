import { AxiosInstance as Axios } from "../../utils/axios";
import { SingleUserResponse } from "./user.interface";

export const getSingleUser = async (
  userId: string,
  bearerToken: string
): Promise<SingleUserResponse> => {
  const { data } = await Axios.get(`/users/${userId}`, {
    headers: {
      Authorization: "Bearer " + bearerToken,
    },
  });

  return data;
};
