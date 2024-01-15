import { _token } from "../../services/axios";

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
  data: SignIn[];
}

export interface OtpResponse {
  user: {
    _id: string;
    email: string;
    phoneNumber: string;
  };
  token: string;
}
export interface VerifyOtpResponse {
  user: any;
  status: string;
  message: string;
  data: OtpResponse;
}

export interface OtpInterface {
  token: typeof _token;
  otp: number;
}
