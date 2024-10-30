<template>
  <div v-if="currentChat" class="chat-window d-flex flex-column">
    <ChatHeader :chat="currentChat" />
    <ChatMessage :messages="currentChat.messages" />
    <ChatInput @send="handleSendMessage" />
  </div>
</template>

<script>
import ChatHeader from './ChatHeader.vue';
import ChatMessage from './ChatMessage.vue';
import ChatInput from './ChatInput.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    ChatHeader,
    ChatMessage,
    ChatInput,
  },
  computed: {
    ...mapGetters(['currentChat']),
  },
  methods: {
    ...mapActions(['sendMessage']),
    handleSendMessage(messageText) {
      this.sendMessage(messageText);
    },
  },
};
</script>
