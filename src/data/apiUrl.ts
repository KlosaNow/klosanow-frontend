export const draftsRoute = "drafts";
export const lessonRoute = "lessons";
export const mediaRoute = "media";
export const userRoute = "users";

// Study chat

export const chatWebSocket = "chats";

export const allChatsWebSocketSlug = "get-all";
export const allChatsWebSocketUrl = `/${chatWebSocket}/${allChatsWebSocketSlug}`;

export const singleChatWebSocketSlug = "get-one";
export const singleChatWebSocketUrl = `/${chatWebSocket}/${singleChatWebSocketSlug}`;

export const deleteChatWebSocketSlug = "delete-one";
export const deleteChatWebSocketUrl = `/${chatWebSocket}/${deleteChatWebSocketSlug}`;

export const sendChatWebSocketSlug = "send-message";
export const sendChatWebSocketUrl = `/${chatWebSocket}/${sendChatWebSocketSlug}`;

export const studyChatWebSocket = "studychats";

export const createStudyChatsWebSocketSlug = "create";
export const createStudyChatsWebSocketUrl = `/${studyChatWebSocket}/${createStudyChatsWebSocketSlug}`;

export const allStudyChatsWebSocketSlug = "get-all";
export const allStudyChatsWebSocketUrl = `/${studyChatWebSocket}/${allStudyChatsWebSocketSlug}`;

export const singleStudyChatWebSocketSlug = "get-one";
export const singleStudyChatWebSocketUrl = `/${studyChatWebSocket}/${singleStudyChatWebSocketSlug}`;

export const deleteStudyChatWebSocketSlug = "delete-one";
export const deleteStudyChatWebSocketUrl = `/${studyChatWebSocket}/${deleteStudyChatWebSocketSlug}`;

export const sendStudyChatWebSocketSlug = "send-message";
export const sendStudyChatWebSocketUrl = `/${studyChatWebSocket}/${sendStudyChatWebSocketSlug}`;

export const updateStudyChatPhotoWebSocketSlug = "update-photo";
export const updateStudyChatPhotoWebSocketUrl = `/${studyChatWebSocket}/${updateStudyChatPhotoWebSocketSlug}`;
