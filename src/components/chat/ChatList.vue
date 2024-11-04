<template>
  <div class="chat-list">
    <h5 class="chat-list-title">Chat</h5>
    <ul class="chat-list-items">
      <li 
        v-for="chat in chats" 
        :key="chat.id" 
        @click="selectChat(chat)"
        :class="{ active: chat.id === currentChat?.id }"
        class="chat-list-item"
      >
        <div class="chat-name">{{ chat.name }}</div>
        <div class="chat-last-message">{{ chat.lastMessage }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ChatList",
  computed: {
    ...mapGetters("chat", ["chats", "currentChat"]),
  },
  methods: {
    ...mapActions("chat", ["selectChat"]),
  },
};
</script>

<style scoped>
.chat-list {
  width: 100%;  
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
}

.chat-list-item:hover {
  background-color: #eaeaea;
}

.chat-name {
  font-weight: bold;
}

.chat-last-message {
  font-size: 0.9em;
  color: #666;
}

.active {
  background-color: #d1e7dd;
}
</style>
