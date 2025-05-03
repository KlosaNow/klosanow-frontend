import React from "react";
import { io, Socket } from "socket.io-client";
import * as webSocketUrls from "src/data/apiUrl";
import { ChatResponse, MessageResponse, MessageType } from "src/types";
import { getToken } from "src/utils/constant";

const useChatWebSocket = () => {
  const url = "wss://api.klosanow.com";
  const [isConnected, setConnected] = React.useState(false);

  const { token } = getToken();

  const socketRef = React.useRef<Socket | null>(null);

  React.useEffect(() => {
    socketRef.current = io(url, {
      query: { token },
      withCredentials: true,
    });
  }, [url]);

  const connectWebSocket = () =>
    socketRef.current?.on("connect", () => {
      console.log(`Conneted successfully`);
      setConnected(true);
    });

  const logAllSocketEvents = () => socketRef.current?.onAny(() => {});

  const disconnectWebSocket = () =>
    socketRef.current?.on("disconnect", (reason) => {
      console.log(`Disconnect ${reason}`);
      setConnected(false);
    });

  const getAllChats = (cb: (chats: ChatResponse) => void) => {
    socketRef.current?.emit(webSocketUrls.allChatsWebSocketUrl);
    socketRef.current?.on(webSocketUrls.allChatsWebSocketUrl, (chats) =>
      cb(chats)
    );

    return () => socketRef.current?.off(webSocketUrls.allChatsWebSocketUrl);
  };

  const getChat = (chatId: string, cb: (messages: MessageType[]) => void) => {
    socketRef.current?.emit(webSocketUrls.singleChatWebSocketUrl, { chatId });
    socketRef.current?.on(
      webSocketUrls.singleChatWebSocketUrl,
      (res: MessageResponse) => cb(res.data)
    );

    return () => socketRef.current?.off(webSocketUrls.singleChatWebSocketUrl);
  };

  const deleteChat = (chatId: string) =>
    socketRef.current?.emit(webSocketUrls.deleteChatWebSocketUrl, { chatId });

  const sendChatMessage = ({
    recipientId,
    message,
  }: {
    recipientId: string;
    message: string;
  }) => {
    const data = { recipientId, message };
    socketRef.current?.emit(webSocketUrls.sendChatWebSocketUrl, data);
  };

  // Study chats
  const getAllStudyChats = (cb: (chats: ChatResponse) => void) => {
    socketRef.current?.emit(webSocketUrls.allStudyChatsWebSocketUrl);
    socketRef.current?.on(
      webSocketUrls.allStudyChatsWebSocketUrl,
      (chats: ChatResponse) => cb(chats)
    );

    return () =>
      socketRef.current?.off(webSocketUrls.allStudyChatsWebSocketUrl);
  };

  const getStudyChat = (
    studyChatId: string,
    cb: (message: MessageType[]) => void
  ) => {
    socketRef.current?.emit(webSocketUrls.allChatsWebSocketUrl, {
      studyChatId,
    });
    socketRef.current?.on(
      webSocketUrls.allChatsWebSocketUrl,
      (res: MessageResponse) => cb(res.data)
    );
  };

  const createStudyChat = (
    {
      title,
      photoUrl,
      members,
    }: {
      title: string;
      photoUrl: string;
      members: string[];
    },
    cb: (res: boolean) => void
  ) => {
    socketRef.current?.emit(
      webSocketUrls.createStudyChatsWebSocketUrl,
      JSON.stringify({ title, photoUrl, members })
    );

    socketRef.current?.on(
      webSocketUrls.createStudyChatsWebSocketUrl,
      (data) => {
        cb(!!data);
      }
    );

    return () =>
      socketRef.current?.off(webSocketUrls.createStudyChatsWebSocketUrl);
  };

  const deleteStudyChat = (studyChatId: string) =>
    socketRef.current?.emit(webSocketUrls.deleteStudyChatWebSocketUrl, {
      studyChatId,
    });

  const addStudyChatMember = ({
    studyChatId,
    members,
  }: {
    studyChatId: string;
    members: string[];
  }) =>
    socketRef.current?.emit(
      webSocketUrls.deleteStudyChatWebSocketUrl,
      JSON.stringify({ studyChatId, members })
    );

  const updateStudyChatPhoto = ({
    studyChatId,
    photoUrl,
  }: {
    studyChatId: string;
    photoUrl: string;
  }) =>
    socketRef.current?.emit(
      webSocketUrls.updateStudyChatPhotoWebSocketUrl,
      JSON.stringify({ studyChatId, photoUrl })
    );

  const sendStudyChatMessage = ({
    studyChatId,
    message,
  }: {
    studyChatId: string;
    message: string;
  }) =>
    socketRef.current?.emit(webSocketUrls.sendStudyChatWebSocketUrl, {
      studyChatId,
      message,
    });

  const cleanUpSocketConnection = () => {
    socketRef.current?.off("connect");
    socketRef.current?.off("chats");
    socketRef.current?.off("studychats");
    socketRef.current?.off("disconnect");
  };

  return {
    isConnected,
    logAllSocketEvents,
    connectWebSocket,
    getAllChats,
    getChat,
    deleteChat,
    sendChatMessage,
    getAllStudyChats,
    getStudyChat,
    addStudyChatMember,
    updateStudyChatPhoto,
    sendStudyChatMessage,
    createStudyChat,
    deleteStudyChat,
    disconnectWebSocket,
    cleanUpSocketConnection,
  };
};

export default useChatWebSocket;
