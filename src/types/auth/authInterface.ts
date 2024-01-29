export interface UserDataI {
  email: string;
  name: string;
  phoneNumber: string;
  role: string;
  savedLessons: any[];
  createdLessons: any[];
  notifications: any[];
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
  name: string;
  email: string;
  phoneNumber: string;
}
export interface SignInValues {
  email: string;
  phoneNumber: string;
}
