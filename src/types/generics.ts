export interface SignInToken {
  otp: number;
  token: string;
}

export type Payload<D> = {
  data: {
    status: string;
    message: string;
    data: D;
  };
  loading?: boolean;
  error?: string;
};
