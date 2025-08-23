import { userRoute } from "src/data/apiUrl";
import { AxiosInstance as Axios } from "../../utils/axios";
import { getToken } from "src/utils/constant";
import { ContactPayload } from "./interface";

export const getContacts = async (): Promise<ContactPayload["contacts"]> => {
  const { token } = getToken();
  const { data } = await Axios.get(`/${userRoute}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
