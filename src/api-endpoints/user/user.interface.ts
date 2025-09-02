export interface SingleUserI {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  role: string;
  createdLessons: Array<any>;
  savedLessons: Array<any>;
  notifications: Array<any>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SingleUserResponse {
  status: string;
  message: string;
  data: SingleUserI;
}

export interface UpdateUserRequest {
  name: string;
  bio: string;
}
