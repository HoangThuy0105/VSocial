import axios from "axios";
// import axiosInstance from "./axios";

export const getChatList = async () => {
  try {
    const response = await axios.get("/chats");
    return response.data; // Backend trả về danh sách cuộc trò chuyện
  } catch (error) {
    console.error("Error fetching chat list:", error);
    throw error;
  }
};

// Lấy tin nhắn của một cuộc trò chuyện
export const getChatMessages = async (chatId) => {
  try {
    const response = await axios.get(`/chats/${chatId}/messages`);
    return response.data; 
  } catch (error) {
    console.error(`Error fetching messages for chat ID ${chatId}:`, error);
    throw error;
  }
};
