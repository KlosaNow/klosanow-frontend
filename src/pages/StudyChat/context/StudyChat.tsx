import React from "react";
import { ChatListItemType, ChatType, Contact } from "../../../types/studyChat";

export interface DefaultValuesProps {
  activeChat: ChatListItemType | null;
  isChatDetailFlyout: boolean;
  chatType: ChatType;
}

interface DefaultMethodProps {
  updateStudyChatValues: (x: Partial<DefaultValuesProps>) => void;
}

export const DefaultValues: DefaultValuesProps = {
  activeChat: null,
  isChatDetailFlyout: false,
  chatType: ChatType.Group,
};

export const DefaultMethods: DefaultMethodProps = {
  updateStudyChatValues: () => null,
};

export const StudyChatContext = React.createContext({
  ...DefaultValues,
  ...DefaultMethods,
});

StudyChatContext.displayName = "StudyChat";
