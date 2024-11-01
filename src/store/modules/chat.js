const chat = {
  namespaced: true,
  state: () => ({
    chats: {
      messages: [
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
        {
          text: "heloo",
          timestamp: "15175122"
        },
      ]
    },
    currentChat: {
      name: "hello",
      avatar: "https://nuoccat.vn/wp-content/uploads/2023/05/thien-nhien-la-gi-2-482x400.jpeg"
    },
  }),
  getters: {
    chats: (state) => state.chats,
    currentChat: (state) => state.currentChat,
  },
};

export default chat;