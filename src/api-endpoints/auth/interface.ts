// try {

//   const userFromApi = data?.data?.user;
//   const token = data?.data?.token;

//   if (!token || !userFromApi) {
//     toast.error("Login fialed: missing token or user data");
//   }

//   //Fetch full user data before updating redux
//   const fullUserApi = (await getSingleUser(userFromApi._id, token)).data;
//   console.log(fullUserApi);
//   const fullUser: SingleUserI = {
//     _id: fullUserApi._id,
//     firstName: fullUserApi?.firstName,
//     lastName: fullUserApi?.lastName,
//     username: fullUserApi?.username, // or any logic you want
//     email: fullUserApi.email,
//     phoneNumber: fullUserApi.phoneNumber,
//     role: fullUserApi.role,
//     createdLessons: fullUserApi.createdLessons,
//     savedLessons: fullUserApi.savedLessons,
//     notifications: fullUserApi.notifications,
//     createdAt: fullUserApi.createdAt,
//     updatedAt: fullUserApi.updatedAt,
//     __v: fullUserApi.__v,
//   };

import { _token } from "../../utils/axios";

export interface AuthResponseInterface {
  status: string;
  message: string;
}

export interface SignInResponse {
  status: string;
  message: string;
  data: {
    user: {
      _id: string;
      email: string;
    };
    token: string;
  };
}
