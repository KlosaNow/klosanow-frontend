import { getToken } from "src/utils/constant";
import { AxiosInstance as Axios } from "../../utils/axios";
import { chatApiRoute, studyChatApiRoute } from "src/data/apiUrl";
import { MessageResponse, UpdateStudyChat } from "src/types";

export const getChats = async () => {
  const { token } = getToken();

  const { data } = await Axios.get(chatApiRoute, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getChat = async (id: string): Promise<MessageResponse> => {
  const { token } = getToken();

  const { data } = await Axios.get(`${chatApiRoute}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getStudyChats = async () => {
  const { token } = getToken();

  const { data } = await Axios.get(studyChatApiRoute, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getStudyChat = async (id: string): Promise<MessageResponse> => {
  const { token } = getToken();

  const { data } = await Axios.get(`${studyChatApiRoute}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const createStudyChat = async (body: {
  title: string;
  photoUrl: string;
  members: string[];
}) => {
  const { token } = getToken();

  const { data } = await Axios.post(studyChatApiRoute, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateStudyChat = async (id: string, body: UpdateStudyChat) => {
  const { token } = getToken();

  const { data } = await Axios.put(`${studyChatApiRoute}/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
