<template>
  <div v-if="chats" class="chat-window d-flex flex-column"> 
     
    <ChatMessage :messages="chats.messages" />
     
  </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue';
import { mapActions } from 'vuex';

export default { 
  components: {
    ChatMessage,
  },
  props: {
    chats: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['sendMessage']),  
    handleSendMessage(messageText) {
      this.sendMessage(messageText);
    },
  },
};
</script>

<style scoped>
.chat-window {
  min-height: 400px;
}
</style>