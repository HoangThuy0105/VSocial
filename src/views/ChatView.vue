<template>
  <div class="d-flex flex-column">
    <!-- <AppHeader /> -->
    <div class="chat-container">
      <!-- ChatList bên trái -->
      <div class="chat-list">
        <ChatList />
      </div>

     
      <div class="chat-content">
        <!-- Đặt ChatHeader ở đây, dưới AppHeader -->
        <ChatHeader :chat="currentChat" />
        <div class="chat-window">
          <ChatWindow :chats="chats" />
        </div>
         <!-- <ChatInput @send="handleSendMessage" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ChatHeader from "../components/chat/ChatHeader.vue";
import ChatWindow from "../components/chat/ChatWindow.vue";
//import ChatInput from "../components/chat/ChatInput.vue";
import ChatList from "../components/chat/ChatList.vue";
// import AppHeader from "../components/layout/AppHeader.vue";

export default {
  name: "ChatView",
  components: {
    ChatHeader,
    ChatWindow,
    //ChatInput,
    ChatList,
    // AppHeader,
  },
  computed: {
    ...mapGetters("chat", ["chats", "currentChat"]),
  },
  methods: {
    ...mapActions(["selectChat", "sendMessage"]),
    handleSendMessage(messageText) {
      this.sendMessage(messageText);
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  height:  100vh;
  width: 100%;
}

.chat-list {
  width: 300px;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

/* ChatContent bên phải */
.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-window {
  flex: 1;
  overflow-y: auto;
}
</style>
