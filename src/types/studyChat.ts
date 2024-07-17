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
  id: string;
  name: string;
  imageUrl: string;
  created_at: string;
  updated_at: string;
  email: string;
  phone: string;
}

export interface GroupedContact {
  contactsChar: string;
  contacts: Contact[];
}

export interface StudyGroupInfoLocation {
  contacts: Contact[];
  isContactsAdded: boolean;
}
