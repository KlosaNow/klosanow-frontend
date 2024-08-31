export interface SignInToken {
  otp: number;
  token: string;
}

export type Payload<D> = {
  data: D;
};
