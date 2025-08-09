import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ChatList from "../../components/ChatList";
import ChatBox from "../../components/ChatBox";
import {
  DefaultValues,
  DefaultValuesProps,
  StudyChatContext,
} from "../../context/StudyChat";
import { ChatDetailFlyout } from "../../flyouts";
import useChatWebSocket from "src/hooks/useChatWebSocket";
import { getChatListData, getStudyChatListData } from "../../utils";
import { fetchChats, fetchStudyChats } from "src/api-endpoints/studyChat";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import {
  getStorageItem,
  removeDuplicatesPreferWithId,
} from "src/utils/generics";
import { ChatData, ChatListData } from "src/types";
import { CHAT_CONTACT_KEY } from "src/data/constants";
import { useSearchParams } from "react-router-dom";
import { RemoveMemberModal } from "../../modals";
import LeaveChatGroupModal from "../../modals/LeaveChatGroupModal";

const StudyChat: React.FC = () => {
  const dispatch = useStoreDispatch();
  const { studyChats, chats } = useStoreSelector((state) => state["studyChat"]);
  const user = useStoreSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  const { eventType } = useChatWebSocket();

  const [state, setState] = React.useState<DefaultValuesProps>(DefaultValues);

  const handleStateUpdate = (newState: Partial<DefaultValuesProps>) =>
    setState((state) => ({ ...state, ...newState }));

  const storageChat = getStorageItem<ChatData>(CHAT_CONTACT_KEY);

  const studyChatList = React.useMemo(
    () => getStudyChatListData(studyChats.data),
    [studyChats]
  );

  const chatList = React.useMemo(() => {
    const chatData = chats.data ? chats.data : [];
    const baseList = [...(storageChat ? [storageChat] : []), ...chatData];
    return removeDuplicatesPreferWithId(
      getChatListData(baseList, user.data?._id || "")
    );
  }, [chats, storageChat, user]);

  const allChats = React.useMemo(
    () => [...studyChatList, ...chatList],
    [chatList, studyChatList]
  );

  const matchedChat = React.useMemo(() => {
    let newChat: ChatListData | null;
    if (slug)
      newChat = allChats.find((item) => item.slug === slug) as ChatListData;
    else newChat = null;
    return newChat;
  }, [chatList, studyChatList, slug]);

  const chat = state.activeChat || matchedChat;

  const handleFetchChats = React.useCallback(async () => {
    try {
      dispatch(fetchChats());
      dispatch(fetchStudyChats());
    } finally {
      handleStateUpdate({ isNewChat: false });
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (eventType === "ping" || eventType === "message" || state.isNewChat)
      handleFetchChats();
  }, [dispatch, eventType, state.isNewChat]);

  return (
    <StudyChatContext.Provider
      value={{
        ...state,
        updateStudyChatValues: handleStateUpdate,
      }}
    >
      <Box height="100%">
        <Flex width="100%" h="100%" position="relative">
          <ChatList list={allChats} />
          <ChatBox chat={chat} />
        </Flex>

        <ChatDetailFlyout />
        <RemoveMemberModal />
        <LeaveChatGroupModal />
      </Box>
    </StudyChatContext.Provider>
  );
};

export default StudyChat;
