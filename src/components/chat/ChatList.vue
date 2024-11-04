<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div class="chat-list" :class="isDarkMode ? 'header-dark' : 'header-light'">
      <h5 class="chat-list-title">Chat</h5>
      <ul class="chat-list-items">
        <li
          v-for="chat in chats"
          :key="chat.id"
          @click="selectChat(chat)"
          :class="['chat-list-item', { active: chat.id === currentChat?.id }]"
        >
          <div class="chat-name">{{ chat.name }}</div>
          <div class="chat-last-message">{{ chat.lastMessage }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "ChatList",
  computed: {
    ...mapGetters("chat", ["chats", "currentChat"]),
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    ...mapActions("chat", ["selectChat"]),
  },
};
</script>

<style scoped>
/* Default light mode styling */
.chat-list {
  width: 100vh;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}

.chat-list-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.chat-list-items {
  list-style-type: none;
  padding: 0;
}

.chat-list-item {
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #fff;
  color: #333;
}

.chat-list-item:hover {
  background-color: #eaeaea;
}

.active {
  background-color: #d1e7dd;
}

/* Dark mode styling */
.dark-mode .chat-list {
  background-color: #2c2c2c;
  border-right: 1px solid #444;
}

.dark-mode .chat-list-title {
  color: #e0e0e0;
}

.dark-mode .chat-list-item {
  background-color: #3a3a3a;
  color: #e0e0e0;
}

.dark-mode .chat-list-item:hover {
  background-color: #4a4a4a;
}

.dark-mode .active {
  background-color: #5a7b7d;
}
</style>
