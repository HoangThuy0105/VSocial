  <template>
  <div class="chat-input d-flex align-items-center p-2 border-top">
    <input
      ref="messageInput"
      v-model="inputMessage"
      type="text"
      class="form-control me-2"
      placeholder="Enter message..."
      @keyup.enter="sendMessage"
    />
    <button class="btn btn-primary" @click="sendMessage">
      <i class="fas fa-paper-plane"></i>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim()) {
        this.$emit("send", this.inputMessage);
        this.inputMessage = "";
        this.$nextTick(() => {
          this.$refs.messageInput.focus();
        });
      }
    },
  },
};
</script>

<style scoped>
.chat-input {
  display: flex;
  padding: 10px;
}
.chat-input input {
  flex: 1;
  padding: 5px;
}
.chat-input button {
  padding: 5px 10px;
}
</style>
