import React from "react";
import { io } from "socket.io-client";
import * as webSocketUrls from "src/data/apiUrl";
import { ChatResponse, MessageResponse, MessageType } from "src/types";
import { getToken } from "src/utils/constant";

const useChatWebSocket = () => {
  const url = "wss://api.klosanow.com";
  const [isConnected, setConnected] = React.useState(false);

  const { token } = getToken();

  const socketClient = io(url, {
    autoConnect: true,
    reconnectionDelay: 3000,
    query: { token },
    withCredentials: true,
  });

  const connectWebSocket = () =>
    socketClient.on("connect", () => {
      console.log(`Conneted successfully`);
      setConnected(true);
    });

  const logAllSocketEvents = () => socketClient.onAny(() => {});

  const disconnectWebSocket = () =>
    socketClient.on("disconnect", (reason) => {
      console.log(`Disconnect ${reason}`);
      setConnected(false);
    });

  const getAllChats = (cb: (chats: ChatResponse) => void) => {
    socketClient.emit(webSocketUrls.allChatsWebSocketUrl);
    socketClient.on(webSocketUrls.allChatsWebSocketUrl, (chats) => cb(chats));

    return () => socketClient.off(webSocketUrls.allChatsWebSocketUrl);
  };

  const getChat = (chatId: string, cb: (messages: MessageType[]) => void) => {
    socketClient.emit(webSocketUrls.singleChatWebSocketUrl, { chatId });
    socketClient.on(
      webSocketUrls.singleChatWebSocketUrl,
      (res: MessageResponse) => cb(res.data)
    );

    return () => socketClient.off(webSocketUrls.singleChatWebSocketUrl);
  };

  const deleteChat = (chatId: string) =>
    socketClient.emit(webSocketUrls.deleteChatWebSocketUrl, { chatId });

  const sendChatMessage = ({
    recipientId,
    message,
  }: {
    recipientId: string;
    message: string;
  }) => {
    const data = { recipientId, message };
    socketClient.emit(webSocketUrls.sendChatWebSocketUrl, data);
  };

  // Study chats
  const getAllStudyChats = (cb: (chats: ChatResponse) => void) => {
    socketClient.emit(webSocketUrls.allStudyChatsWebSocketUrl);
    socketClient.on(
      webSocketUrls.allStudyChatsWebSocketUrl,
      (chats: ChatResponse) => cb(chats)
    );

    return () => socketClient.off(webSocketUrls.allStudyChatsWebSocketUrl);
  };

  const getStudyChat = (
    studyChatId: string,
    cb: (message: MessageType[]) => void
  ) => {
    socketClient.emit(webSocketUrls.allChatsWebSocketUrl, { studyChatId });
    socketClient.on(
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
    socketClient.emit(
      webSocketUrls.createStudyChatsWebSocketUrl,
      JSON.stringify({ title, photoUrl, members })
    );

    socketClient.on(webSocketUrls.createStudyChatsWebSocketUrl, (data) => {
      console.log(data);
      // cb(data.status === "success");
      cb(!!data);
    });

    return () => socketClient.off(webSocketUrls.createStudyChatsWebSocketUrl);
  };

  const deleteStudyChat = (studyChatId: string) =>
    socketClient.emit(webSocketUrls.deleteStudyChatWebSocketUrl, {
      studyChatId,
    });

  const addStudyChatMember = ({
    studyChatId,
    members,
  }: {
    studyChatId: string;
    members: string[];
  }) =>
    socketClient.emit(
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
    socketClient.emit(
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
    socketClient.emit(webSocketUrls.sendStudyChatWebSocketUrl, {
      studyChatId,
      message,
    });

  const cleanUpSocketConnection = () => {
    socketClient.off("connect");
    socketClient.off("chats");
    socketClient.off("studychats");
    socketClient.off("disconnect");
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
