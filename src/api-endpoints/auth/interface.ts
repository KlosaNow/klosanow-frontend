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