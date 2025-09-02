import React from "react";
import { io, Socket } from "socket.io-client";
import * as webSocketUrls from "src/data/apiUrl";
import { getToken } from "src/utils/constant";

const useChatWebSocket = () => {
  const url = "wss://api.klosanow.com";
  const [isConnected, setConnected] = React.useState(false);
  const [eventType, setEvent] = React.useState<"message" | "ping" | null>(null);

  const token = getToken();
  const socketRef = React.useRef<Socket | null>(null);

  React.useEffect(() => {
    if (!token) return;

    const socket = io(url, {
      query: { token },
      withCredentials: true,
    });

    socketRef.current = socket;

    // connection events
    socket.on("connect", () => {
      console.log("Connected successfully");
      setConnected(true);
    });

    socket.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
      setConnected(false);
    });

    // packet events
    const engine = socket.io.engine;
    const handleEvent = (event: string) => {
      if (event.includes("message")) setEvent("message");
      else if (event.includes("ping")) setEvent("ping");
      else setEvent(null);
    };
    engine.on("packet", (packet) => handleEvent(packet.type));

    // cleanup on unmount
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      engine.off("packet");
      socket.disconnect();
    };
  }, [url, token]);

  const emit = (event: string, data: any) =>
    socketRef.current?.emit(event, data);

  const disconnectWebSocket = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      setConnected(false);
    }
  };

  return {
    isConnected,
    eventType,
    disconnectWebSocket,
    deleteChat: (chatId: string) =>
      emit(webSocketUrls.deleteChatWebSocketUrl, { chatId }),
    sendChatMessage: ({
      recipientId,
      message,
    }: {
      recipientId: string;
      message: string;
    }) => emit(webSocketUrls.sendChatWebSocketUrl, { recipientId, message }),
    deleteStudyChat: (studyChatId: string) =>
      emit(webSocketUrls.deleteStudyChatWebSocketUrl, { studyChatId }),
    addStudyChatMember: ({
      studyChatId,
      members,
    }: {
      studyChatId: string;
      members: string[];
    }) =>
      emit(webSocketUrls.addStudyChatMembersWebSocketUrl, {
        studyChatId,
        members,
      }),
    updateStudyChatPhoto: ({
      studyChatId,
      photoUrl,
    }: {
      studyChatId: string;
      photoUrl: string;
    }) =>
      emit(webSocketUrls.updateStudyChatPhotoWebSocketUrl, {
        studyChatId,
        photoUrl,
      }),
    sendStudyChatMessage: ({
      studyChatId,
      message,
    }: {
      studyChatId: string;
      message: string;
    }) =>
      emit(webSocketUrls.sendStudyChatWebSocketUrl, { studyChatId, message }),
  };
};

export default useChatWebSocket;
