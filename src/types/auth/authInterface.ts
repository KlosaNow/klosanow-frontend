export interface userDataInterface {
  email: string;
  name: string;
  phoneNumber: string;
  role: string;
  // savedLessons: []
  // createdLessons: []
  // notifications: []
}
export interface userInterface {
  token: string;
  isAuth: boolean;
  data: userDataInterface | null;
}

export interface authResponseInterface {
  token: string;
  otp: number;
}
