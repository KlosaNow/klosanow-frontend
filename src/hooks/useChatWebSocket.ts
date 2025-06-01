import React from "react";
import { io, Socket } from "socket.io-client";
import * as webSocketUrls from "src/data/apiUrl";
import { ChatResponse, MessageResponse, MessageType } from "src/types";
import { getToken } from "src/utils/constant";

const useChatWebSocket = () => {
  const url = "wss://api.klosanow.com";
  const [isConnected, setConnected] = React.useState(false);
  const [eventType, setEvent] = React.useState<"message" | "ping" | null>(null);

  const authToken = getToken();
  const token = authToken?.token;

  const socketRef = React.useRef<Socket | null>(null);

  React.useEffect(() => {
    if (token)
      socketRef.current = io(url, {
        query: { token },
        withCredentials: true,
      });
  }, [url, token]);

  React.useEffect(() => {
    const engine = socketRef.current?.io.engine;

    const handleEvent = (event: string) => {
      if (event.includes("message")) setEvent("message");
      else if (event.includes("ping")) setEvent("ping");
      else setEvent(null);
    };

    if (!engine) return;

    engine.on("packet", (packet) => handleEvent(packet.type));

    return () => {
      engine.off("packet");
    };
  }, []);

  const connectWebSocket = () =>
    socketRef.current?.on("connect", () => {
      console.log(`Conneted successfully`);
      setConnected(true);
    });

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
    socketRef.current?.emit(webSocketUrls.singleStudyChatWebSocketUrl, {
      studyChatId,
    });
    socketRef.current?.on(
      webSocketUrls.singleStudyChatWebSocketUrl,
      (res: MessageResponse) => cb(res.data)
    );

    return () =>
      socketRef.current?.off(webSocketUrls.singleStudyChatWebSocketUrl);
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
    socketRef.current?.emit(webSocketUrls.createStudyChatsWebSocketUrl, {
      title,
      photoUrl,
      members,
    });

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
    socketRef.current?.emit(webSocketUrls.addStudyChatMembersWebSocketUrl, {
      studyChatId,
      members,
    });

  const updateStudyChatPhoto = ({
    studyChatId,
    photoUrl,
  }: {
    studyChatId: string;
    photoUrl: string;
  }) =>
    socketRef.current?.emit(webSocketUrls.updateStudyChatPhotoWebSocketUrl, {
      studyChatId,
      photoUrl,
    });

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
    socketRef.current?.off("disconnect");
  };

  return {
    isConnected,
    eventType,
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
