<template>
  <div v-if="currentChat">
    <h3>{{ currentChat.name }}</h3>
    <ul>
      <li v-for="message in messages" :key="message.timestamp">
        <span :class="message.sender === 'me' ? 'my-message' : 'their-message'">
          {{ message.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatContent",
  computed: {
    ...mapGetters("chat", ["currentChat", "messages"]),
  },
};
</script>

<style scoped>
.my-message {
  color: blue;
}
.their-message {
  color: green;
}
</style>
