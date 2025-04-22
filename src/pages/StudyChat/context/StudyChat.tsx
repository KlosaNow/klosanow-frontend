import React from "react";
import { ChatListData, MessageType } from "../../../types/studyChat";

export interface DefaultValuesProps {
  activeChat: ChatListData | null;
  isChatDetailFlyout: boolean;
  messages: MessageType[];
}

interface DefaultMethodProps {
  updateStudyChatValues: (x: Partial<DefaultValuesProps>) => void;
}

export const DefaultValues: DefaultValuesProps = {
  activeChat: null,
  isChatDetailFlyout: false,
  messages: [],
};

export const DefaultMethods: DefaultMethodProps = {
  updateStudyChatValues: () => null,
};

export const StudyChatContext = React.createContext({
  ...DefaultValues,
  ...DefaultMethods,
});

StudyChatContext.displayName = "StudyChat";
