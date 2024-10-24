import { draftsRoute, lessonRoute } from "../../data/apiUrl";
import { Draft, CreateLessonFormValues } from "../../types";
import { AxiosInstance as Axios } from "../../utils/axios";
import { getToken } from "../../utils/constant";

export const getLessons = async () => {
  const { token } = getToken();
  const { data } = await Axios.get(lessonRoute, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteLesson = async (id: string) => {
  const { token } = getToken();
  const { data } = await Axios.delete(`${lessonRoute}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const postLessons = async (payload: CreateLessonFormValues) => {
  const { token } = getToken();
  const { data } = await Axios.post(lessonRoute, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const saveToDrafts = async (payload: Partial<Draft>) => {
  const { token } = getToken();
  const { data } = await Axios.post(draftsRoute, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getDrafts = async () => {
  const { token } = getToken();
  const { data } = await Axios.get(draftsRoute, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const updateDraft = async (id: string, payload: Partial<Draft>) => {
  const { token } = getToken();
  const { data } = await Axios.put(`${draftsRoute}/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const deleteDraft = async (id: string) => {
  const { token } = getToken();
  const { data } = await Axios.delete(`${draftsRoute}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
