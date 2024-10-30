import { createStore } from 'vuex';

export default createStore({
  state: {
    chats: [
      { id: 1, name: 'Tuấn Lê', avatar: 'https://example.com/avatar1.jpg', messages: [
        { text: 'Chào bạn!', timestamp: '10:00 AM', isSentByUser: false },
        { text: 'Bạn khỏe không?', timestamp: '10:01 AM', isSentByUser: false },
      ] },
      { id: 2, name: 'Hoàng Lương', avatar: 'https://example.com/avatar2.jpg', messages: [
        { text: 'Xin chào!', timestamp: '11:00 AM', isSentByUser: false },
        { text: 'Có cần giúp gì không?', timestamp: '11:01 AM', isSentByUser: false },
      ] },
    ],
    currentChat: null, 
  },
  mutations: {
    SET_CURRENT_CHAT(state, chat) {
      state.currentChat = chat;
    },
    ADD_MESSAGE(state, { chatId, message }) {
      const chat = state.chats.find((c) => c.id === chatId);
      if (chat) {
        chat.messages.push(message);
      }
    },
  },
  actions: {
    selectChat({ commit }, chat) {
      commit('SET_CURRENT_CHAT', chat);
    },
    sendMessage({ commit, state }, messageText) {
      if (state.currentChat) {
        const newMessage = {
          text: messageText,
          timestamp: new Date().toLocaleTimeString(),
          isSentByUser: true,
        };
        commit('ADD_MESSAGE', { chatId: state.currentChat.id, message: newMessage });
      }
    },
  },
  getters: {
    currentChat: (state) => state.currentChat,
    chats: (state) => state.chats,
  },
});
