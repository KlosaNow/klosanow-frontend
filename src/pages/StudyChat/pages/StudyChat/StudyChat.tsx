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
import { setChats, setStudyChats } from "src/api-endpoints/studyChat";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import {
  getStorageItem,
  removeDuplicatesPreferWithId,
} from "src/utils/generics";
import { ChatData, ChatListData } from "src/types";
import { CHAT_CONTACT_KEY } from "src/data/constants";
import { useSearchParams } from "react-router-dom";

const StudyChat: React.FC = () => {
  const dispatch = useStoreDispatch();
  const { studyChats, chats } = useStoreSelector((state) => state["studyChat"]);
  const user = useStoreSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  const { getAllChats, getAllStudyChats, eventType } = useChatWebSocket();

  const [state, setState] = React.useState<DefaultValuesProps>(DefaultValues);

  const handleStateUpdate = (newState: Partial<DefaultValuesProps>) =>
    setState((state) => ({ ...state, ...newState }));

  const storageChat = getStorageItem<ChatData>(CHAT_CONTACT_KEY);

  const studyChatList = React.useMemo(
    () => getStudyChatListData(studyChats),
    [studyChats]
  );

  const chatList = React.useMemo(() => {
    const baseList = [...(storageChat ? [storageChat] : []), ...chats];
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
      await Promise.all([
        new Promise((resolve) => {
          getAllChats((res) => {
            dispatch(setChats(res.status === "success" ? res.data : []));
            resolve(null);
          });
        }),
        new Promise((resolve) => {
          getAllStudyChats((res) => {
            dispatch(setStudyChats(res.status === "success" ? res.data : []));
            resolve(null);
          });
        }),
      ]);
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
      }}>
      <Box height="100%">
        <Flex width="100%" h="100%" position="relative">
          <ChatList list={allChats} />
          <ChatBox chat={chat} />
        </Flex>

        <ChatDetailFlyout />
      </Box>
    </StudyChatContext.Provider>
  );
};

export default StudyChat;
