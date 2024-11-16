import React from "react";
import * as webSocketUrls from "src/data/apiUrl";
import { getToken } from "src/utils/constant";
import StompJs, { Client } from "stompjs";

const useWebsocket = () => {
  const clientRef = React.useRef<Client | null>(null);
  const [isConnected, setConnected] = React.useState(false);
  const token = getToken();
  const url = "https://api.klosanow.com/api/v1";
  const authorizationHeader = { Authorization: `Bearer ${token}` };

  const connectWebSocket = () => {
    const client = StompJs.over(new WebSocket(url));
    client.connect(
      authorizationHeader,
      (frame) => {
        setConnected(true);
        console.log(`Connected ${frame}`);
      },
      (error) => {
        console.error(`Connection failed ${error}`);
        console.log(`Restarting connection`);
        setTimeout(connectWebSocket, 1000);
      }
    );

    clientRef.current = client;
  };

  const disconnectWebSocket = () => {
    clientRef.current?.disconnect(() => console.log("Disconnected"));
  };

  const getAllChats = () => {
    clientRef.current?.send(
      webSocketUrls.allChatsWebSocketUrl,
      authorizationHeader
    );
  };

  const getChat = (chatId: string) => {
    clientRef.current?.send(
      webSocketUrls.singleChatWebSocketUrl,
      authorizationHeader,
      JSON.stringify({ chatId })
    );
  };

  const deleteChat = (chatId: string) => {
    clientRef.current?.send(
      webSocketUrls.deleteChatWebSocketUrl,
      authorizationHeader,
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
    clientRef.current?.send(
      webSocketUrls.sendChatWebSocketUrl,
      authorizationHeader,
      JSON.stringify({ recipientId, message })
    );
  };

  const getAllStudyChats = () => {
    clientRef.current?.send(
      webSocketUrls.allStudyChatsWebSocketUrl,
      authorizationHeader
    );
  };

  const getStudyChat = (studyChatId: string) => {
    clientRef.current?.send(
      webSocketUrls.allChatsWebSocketUrl,
      authorizationHeader,
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
    clientRef.current?.send(
      webSocketUrls.createStudyChatsWebSocketUrl,
      authorizationHeader,
      JSON.stringify({ title, photoUrl, members })
    );
  };

  const deleteStudyChat = (studyChatId: string) => {
    clientRef.current?.send(
      webSocketUrls.deleteStudyChatWebSocketUrl,
      authorizationHeader,
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
    clientRef.current?.send(
      webSocketUrls.deleteStudyChatWebSocketUrl,
      authorizationHeader,
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
    clientRef.current?.send(
      webSocketUrls.updateStudyChatPhotoWebSocketUrl,
      authorizationHeader,
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
    clientRef.current?.send(
      webSocketUrls.sendStudyChatWebSocketUrl,
      authorizationHeader,
      JSON.stringify({ studyChatId, message })
    );
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
  };
};

export default useWebsocket;
