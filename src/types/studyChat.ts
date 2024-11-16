export enum ChatType {
  Single = "single",
  Group = "group",
}

interface Admin {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
}

export interface ChatListItemType {
  id: string;
  groupName: string;
  groupImage?: string;
  lastmsg: string;
  unread_messages: number;
  lastmsg_time: string;
  slug: string;
  contacts: Contact[];
  description: string;
  admin: {
    data: Admin;
  };
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  createdLessons: Array<any>;
  savedLessons: Array<any>;
  notifications: Array<any>;
  createdAt: string;
  updatedAt: string;
  image: string;
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
