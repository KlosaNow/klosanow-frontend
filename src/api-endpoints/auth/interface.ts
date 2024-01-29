import { _token } from "../../utils/axios";

export interface AuthResponseInterface {
  status: string;
  message: string;
}

export interface SignIn {
  otp: number;
  token: string;
}
export interface SignInResponse {
  status: string;
  message: string;
  data: SignIn;
}

export interface OtpResponse {
  user: {
    _id: string;
    email: string;
    phoneNumber: string;
  };
}
export interface VerifyOtpResponse {
  user: any;
  status: string;
  message: string;
  data: OtpResponse;
  token: string;
}

export interface OtpInterface {
  token: typeof _token;
  otp: number;
}
