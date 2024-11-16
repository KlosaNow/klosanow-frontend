import React from "react";
import { io } from "socket.io-client";
import * as webSocketUrls from "src/data/apiUrl";
import { getToken } from "src/utils/constant";

const useChatWebSocket = () => {
  const url = "api.klosanow.com/api/v1";
  const [isConnected, setConnected] = React.useState(false);

  const token = getToken();

  const socketClient = io(url, {
    autoConnect: true,
    reconnectionDelay: 3000,
    auth: {
      token: `Bearer ${token}`,
    },
  });

  const connectWebSocket = () => {
    socketClient.on("connect", () => {
      console.log(`Conneted successfully`);
      setConnected(true);
    });
  };

  const disconnectWebSocket = () => {
    socketClient.on("disconnect", (reason) => {
      console.log(`Disconnect ${reason}`);
      setConnected(false);
    });
  };

  const getAllChats = () => {
    socketClient.emit(webSocketUrls.allChatsWebSocketUrl);
  };

  const getChat = (chatId: string) => {
    socketClient.emit(
      webSocketUrls.singleChatWebSocketUrl,
      JSON.stringify({ chatId })
    );
  };

  const deleteChat = (chatId: string) => {
    socketClient.emit(
      webSocketUrls.deleteChatWebSocketUrl,
      JSON.stringify({ chatId })
    );
  };

  const sendChatMessage = ({
    recipientId,
    message,
  }: {
    recipientId: string;
    message: string;
  }) => {
    socketClient.emit(
      webSocketUrls.sendChatWebSocketUrl,
      JSON.stringify({ recipientId, message })
    );
  };

  const getAllStudyChats = () => {
    socketClient.emit(webSocketUrls.allStudyChatsWebSocketUrl);
  };

  const getStudyChat = (studyChatId: string) => {
    socketClient.emit(
      webSocketUrls.allChatsWebSocketUrl,
      JSON.stringify({ studyChatId })
    );
  };

  const createStudyChat = ({
    title,
    photoUrl,
    members,
  }: {
    title: string;
    photoUrl: string;
    members: string[];
  }) => {
    socketClient.emit(
      webSocketUrls.createStudyChatsWebSocketUrl,
      JSON.stringify({ title, photoUrl, members })
    );
  };

  const deleteStudyChat = (studyChatId: string) => {
    socketClient.emit(
      webSocketUrls.deleteStudyChatWebSocketUrl,
      JSON.stringify({ studyChatId })
    );
  };

  const addStudyChatMember = ({
    studyChatId,
    members,
  }: {
    studyChatId: string;
    members: string[];
  }) => {
    socketClient.emit(
      webSocketUrls.deleteStudyChatWebSocketUrl,
      JSON.stringify({ studyChatId, members })
    );
  };

  const updateStudyChatPhoto = ({
    studyChatId,
    photoUrl,
  }: {
    studyChatId: string;
    photoUrl: string;
  }) => {
    socketClient.emit(
      webSocketUrls.updateStudyChatPhotoWebSocketUrl,
      JSON.stringify({ studyChatId, photoUrl })
    );
  };

  const sendStudyChatMessage = ({
    studyChatId,
    message,
  }: {
    studyChatId: string;
    message: string;
  }) => {
    socketClient.emit(
      webSocketUrls.sendStudyChatWebSocketUrl,
      JSON.stringify({ studyChatId, message })
    );
  };

  const cleanUpChatWebSocket = () => {
    socketClient.off("connect");
    socketClient.off("disconnect");
  };

  return {
    isConnected,
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
    cleanUpChatWebSocket,
  };
};

export default useChatWebSocket;
