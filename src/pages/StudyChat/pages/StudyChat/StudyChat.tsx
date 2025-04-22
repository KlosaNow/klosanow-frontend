import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BottomNav } from "../../../../components";
import ChatList from "../../components/ChatList";
import ChatBox from "../../components/ChatBox";
import {
  DefaultValues,
  DefaultValuesProps,
  StudyChatContext,
} from "../../context/StudyChat";
import { ChatDetailFlyout } from "../../flyouts";
import { useQuery } from "@tanstack/react-query";
import useChatWebSocket from "src/hooks/useChatWebSocket";
import { getChatListData, getStudyChatListData } from "../../utils";
import { setChats, setStudyChats } from "src/api-endpoints/studyChat";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import { getStorageItem } from "src/utils/generics";
import { ChatData, ChatListData } from "src/types";
import { CHAT_CONTACT_KEY } from "src/data/constants";
import { useSearchParams } from "react-router-dom";

const StudyChat: React.FC = () => {
  const dispatch = useStoreDispatch();
  const { studyChats, chats } = useStoreSelector((state) => state["studyChat"]);
  const user = useStoreSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  const { getAllChats, getAllStudyChats } = useChatWebSocket();

  const [state, setState] = React.useState<DefaultValuesProps>(DefaultValues);

  const handleStateUpdate = (newState: Partial<DefaultValuesProps>) =>
    setState((state) => ({ ...state, ...newState }));

  const storageChat = getStorageItem<ChatData>(CHAT_CONTACT_KEY);

  const studyChatList = getStudyChatListData(studyChats);

  const chatList = getChatListData(
    [...(storageChat ? [storageChat] : []), ...chats],
    user.data?._id || ""
  );

  const chat =
    state.activeChat ||
    ([...chatList, ...studyChatList].find(
      (item) => item.slug === slug
    ) as ChatListData);

  useQuery({
    queryKey: ["chats"],
    queryFn: () =>
      getAllChats((res) => {
        if (res.status === "success") {
          dispatch(setChats(res.data));
        } else dispatch(setChats([]));
      }),
  });

  useQuery({
    queryKey: ["study-chat"],
    queryFn: () =>
      getAllStudyChats((res) => {
        if (res.status === "success") {
          console.log(res);
          dispatch(setStudyChats(res.data));
        } else dispatch(setStudyChats([]));
      }),
  });

  // useQuery({
  //   queryKey: ["socket-events"],
  //   queryFn: () => logAllSocketEvents(),
  // });

  return (
    <StudyChatContext.Provider
      value={{
        ...state,
        updateStudyChatValues: handleStateUpdate,
      }}
    >
      <Box height="100%">
        <Flex width="100%" h="100%" position="relative">
          <ChatList studyChatList={studyChatList} chatList={chatList} />
          <ChatBox chat={chat} />
        </Flex>

        <BottomNav />

        <ChatDetailFlyout />
      </Box>
    </StudyChatContext.Provider>
  );
};

export default StudyChat;
