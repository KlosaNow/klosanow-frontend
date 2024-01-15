import { SingleUserResponse } from "./user.interface";
import api from "../../services/axiosBaseInstance";

export const getSingleUser = async (
  userId: string,
  bearerToken: string
): Promise<SingleUserResponse> => {
  const { data } = await api.get(`/users/${userId}`, {
    // headers: {
    //   Authorization: "Bearer " + bearerToken,
    // },
  });
  // check if data is returned then dispatch to store
  // if(data.data){
  //         dispatch(updateUserData(data.data));

  // }
  return data;
};
