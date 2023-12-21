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

export interface Otp {
  user: {
    _id: string;
    email: string;
    phoneNumber: string;
  };
  token: string;
}
export interface VerifyOtpResponse {
  status: string;
  message: string;
  data: Otp[];
}