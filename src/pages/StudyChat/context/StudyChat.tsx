import React from "react";
import { ChatListData } from "../../../types/studyChat";

export interface DefaultValuesProps {
  activeChat: ChatListData | null;
  isChatDetailFlyout: boolean;
  loadingMessage: boolean;
  isNewChat: boolean;
}

interface DefaultMethodProps {
  updateStudyChatValues: (x: Partial<DefaultValuesProps>) => void;
}

export const DefaultValues: DefaultValuesProps = {
  activeChat: null,
  isChatDetailFlyout: false,
  loadingMessage: false,
  isNewChat: false,
};

export const DefaultMethods: DefaultMethodProps = {
  updateStudyChatValues: () => null,
};

export const StudyChatContext = React.createContext({
  ...DefaultValues,
  ...DefaultMethods,
});

StudyChatContext.displayName = "StudyChat";
