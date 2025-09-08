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

  const emit = (event: string, data?: any) =>
    socketRef.current?.emit(event, data);

  const on = (event: string, cb: (data: any) => void) => {
    socketRef.current?.on(event, cb);
    return () => socketRef.current?.off(event, cb);
  };

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

    // ---- Chat methods ----
    getAllChats: (cb: (chats: any) => void) => {
      emit(webSocketUrls.allChatsWebSocketUrl);
      return on(webSocketUrls.allChatsWebSocketUrl, cb);
    },

    getChat: (chatId: string, cb: (messages: any) => void) => {
      emit(webSocketUrls.singleChatWebSocketUrl, { chatId });
      return on(webSocketUrls.singleChatWebSocketUrl, (res: any) =>
        cb(res.data)
      );
    },

    deleteChat: (chatId: string) =>
      emit(webSocketUrls.deleteChatWebSocketUrl, { chatId }),

    sendChatMessage: ({
      recipientId,
      message,
    }: {
      recipientId: string;
      message: string;
    }) => emit(webSocketUrls.sendChatWebSocketUrl, { recipientId, message }),

    // ---- Study Chat methods ----
    getAllStudyChats: (cb: (chats: any) => void) => {
      emit(webSocketUrls.allStudyChatsWebSocketUrl);
      return on(webSocketUrls.allStudyChatsWebSocketUrl, cb);
    },

    getStudyChat: (studyChatId: string, cb: (messages: any) => void) => {
      emit(webSocketUrls.singleStudyChatWebSocketUrl, { studyChatId });
      return on(webSocketUrls.singleStudyChatWebSocketUrl, (res: any) =>
        cb(res.data)
      );
    },

    createStudyChat: ({
      title,
      photoUrl,
      members,
    }: {
      title: string;
      photoUrl: string;
      members: string[];
    }) =>
      emit(webSocketUrls.createStudyChatsWebSocketUrl, {
        title,
        photoUrl,
        members,
      }),

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
