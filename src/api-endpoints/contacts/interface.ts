import { Payload } from "src/types/generics";
import { Contact } from "src/types";

export interface ContactPayload {
  contacts: Payload<Array<Contact>>;
}
