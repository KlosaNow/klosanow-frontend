export enum ChatType {
  Single = "single",
  Group = "group",
}

export interface StudyChatListData {
  _id: string;
  members: Contact[];
  createdAt: string;
  owner: string;
  photoUrl: string;
  title: string;
  updatedAt: string;
  last_msg_time: string;
}

export interface ChatListData {
  id: string;
  name: string;
  slug: string;
  img: string;
  last_msg_time: string;
  type: ChatType;
  members?: Array<Contact>;
  recipient?: Contact;
  admin: Contact;
  createdAt: string;
  last_msg?: string;
  unread_messages?: number;
  description?: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  role: string;
  createdLessons: Array<unknown>;
  savedLessons: Array<unknown>;
  notifications: Array<unknown>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GroupedContact {
  contactsChar: string;
  contacts: Contact[];
}

export interface StudyGroupInfoLocation {
  contacts: Contact[];
  isContactsAdded: boolean;
}

export interface ChatData {
  createdAt: string;
  members: Array<Contact>;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface StudyChatResponse {
  message: string;
  status: string;
  data: Array<StudyChatListData>;
}

export interface ChatResponse {
  message: string;
  status: string;
  data: Array<ChatData>;
}

export interface MessageResponse {
  message: string;
  status: string;
  data: Array<MessageType>;
}

export interface MessageType {
  _id: string;
  chatId: string;
  text: string;
  sender: Contact;
  recipient: Contact;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UpdateStudyChat {
  members?: {
    addMembers?: string[];
    removeMembers?: string[];
  };
  photoUrl?: string;
}
