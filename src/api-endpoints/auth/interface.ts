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
