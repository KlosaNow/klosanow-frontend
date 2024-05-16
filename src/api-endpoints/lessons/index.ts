import {AxiosInstance as Axios} from '../../utils/axios';
import { LessonResponseInterface, CreateLessonInterface } from './interface';

export const saveToDrafts = async (draftPayload: object) => {
		const userData = (localStorage.getItem("USER_KEY"))
	const bearerToken = userData ? JSON.parse(userData)?.token : null
	const { data } = await Axios.post('/drafts', draftPayload, {
		headers: {
			Authorization: "Bearer " + bearerToken,
		}
	});
	return data;
};
export const fetchDrafts = async () => {
	const userData = (localStorage.getItem("USER_KEY"))
	const bearerToken = userData ? JSON.parse(userData)?.token : null
	const {data} = await Axios.get(`/drafts`, {
    headers: {
      Authorization: "Bearer " + bearerToken,
    },
  });

	return data;
};
