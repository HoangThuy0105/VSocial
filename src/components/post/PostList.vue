<template>
  <div>
    <h3>Danh sách cuộc trò chuyện</h3>
    <ul>
      <li
        v-for="chat in chatList"
        :key="chat.id"
        @click="selectChat(chat)"
        :class="{ active: chat.id === currentChat?.id }"
      >
        <img :src="chat.avatar" alt="Avatar" />
        <div>{{ chat.name }}</div>
        <small>{{ chat.lastMessage }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ChatList",
  computed: {
    ...mapGetters("chat", ["chatList", "currentChat"]),
  },
  methods: {
    ...mapActions("chat", ["fetchChatList", "selectChat"]),
  },
  mounted() {
    this.fetchChatList(); 
  },
};
</script>
