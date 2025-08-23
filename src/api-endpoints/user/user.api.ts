import { getToken } from "src/utils/constant";
import { AxiosInstance as Axios } from "../../utils/axios";
import { SingleUserResponse, UpdateUserRequest } from "./user.interface";
import { userRoute } from "src/data/apiUrl";

export const getSingleUser = async (
  userId: string,
  bearerToken: string
): Promise<SingleUserResponse> => {
  const { data } = await Axios.get(`/${userRoute}/${userId}`, {
    headers: {
      Authorization: "Bearer " + bearerToken,
    },
  });

  return data;
};

export const postUser = async (values: UpdateUserRequest) => {
  const { token } = getToken();
  const { data } = await Axios.post(userRoute, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
