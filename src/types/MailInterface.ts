export interface MailInterface {
  from: string;
  to: string;
  subject: string;
  message: string;
  file?: File;
}
