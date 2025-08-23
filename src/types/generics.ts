export interface SignInToken {
  otp: number;
  token: string;
}

export type Payload<D> = {
  data: D;
};

export type FileUrlKey =
  | "video_url"
  | "thumbnail_url"
  | "study_chat"
  | "chat-file"
  | "chat-audio";
