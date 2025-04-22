export const draftsRoute = "drafts";
export const lessonRoute = "lessons";
export const mediaRoute = "media";
export const userRoute = "users";

// Study chat
export const chatWebSocket = "chats";

const allChatsWebSocketSlug = "get-all";
const singleChatWebSocketSlug = "get-one";
const deleteChatWebSocketSlug = "delete-one";
const sendChatWebSocketSlug = "send-message";

export const allChatsWebSocketUrl = `${chatWebSocket}:${allChatsWebSocketSlug}`;
export const singleChatWebSocketUrl = `${chatWebSocket}:${singleChatWebSocketSlug}`;
export const deleteChatWebSocketUrl = `${chatWebSocket}:${deleteChatWebSocketSlug}`;
export const sendChatWebSocketUrl = `${chatWebSocket}:${sendChatWebSocketSlug}`;

export const studyChatWebSocket = "studychats";
export const createStudyChatsWebSocketSlug = "create";
export const updateStudyChatPhotoWebSocketSlug = "update-photo";

export const createStudyChatsWebSocketUrl = `${studyChatWebSocket}:${createStudyChatsWebSocketSlug}`;
export const allStudyChatsWebSocketUrl = `${studyChatWebSocket}:${allChatsWebSocketSlug}`;
export const singleStudyChatWebSocketUrl = `${studyChatWebSocket}:${singleChatWebSocketSlug}`;
export const deleteStudyChatWebSocketUrl = `${studyChatWebSocket}:${deleteChatWebSocketUrl}`;
export const sendStudyChatWebSocketUrl = `${studyChatWebSocket}:${sendChatWebSocketUrl}`;
export const updateStudyChatPhotoWebSocketUrl = `${studyChatWebSocket}:${updateStudyChatPhotoWebSocketSlug}`;
