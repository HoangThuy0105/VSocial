<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      class="chat-input d-flex align-items-center p-2"
      :class="isDarkMode ? 'header-dark' : 'header-light'"
    >
      <input
        ref="messageInput"
        :class="[
          'form-control',
          isDarkMode
            ? 'bg-dark text-white border border-secondary'
            : 'bg-light border',
        ]"
        v-model="inputMessage"
        type="text"
        class="form-control me-2"
        placeholder="Enter message..."
        @keyup.enter="sendMessage"
      />
      <span class="btn no-outline" @click="sendMessage"  style="cursor: pointer; border: none; outline: none;">
        <i
          :class="
            isDarkMode
              ? 'fas fa-paper-plane text-white custom-icon '
              : 'fas fa-paper-plane text-dark custom-icon'
          "
        ></i>
      </span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      inputMessage: "",
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
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
.custom-icon{
  font-size: 1.5rem;
}
.no-outline{
  outline: none;
}

</style>
