export interface userDataInterface {
  name: string;
}
export interface userInterface {
  token: string;
  isAuth: boolean;
  data: any;
}

export interface authResponseInterface {
  token: string;
  otp: number;
}
