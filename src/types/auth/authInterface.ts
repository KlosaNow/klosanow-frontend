export interface UserDataI {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  role: string;
  savedLessons: any[];
  createdLessons: any[];
  profilePhoto: string;
  notifications: any[];
  bio: string;
  _id: string;
}
export interface UserI {
  token: string;
  isAuth: boolean;
  data: UserDataI | null;
}

export interface AuthResponseI {
  token: string;
  otp: number;
}

export interface SignUpValues {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
}
export interface SignInValues {
  email: string;
  password: string;
}
export interface forgotValues {
  email: string;
}
export interface ResetPasswordValues {
  token: string;
  password: string;
  confirmPassword: string;
}
export interface AuthResponseInterface {
  message: string;
  data?: any;
}
