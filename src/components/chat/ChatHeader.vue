<template>
  <div class="chat-header p-3 border-bottom d-flex align-items-center">
    <img
      :src="chat.avatar || defaultAvatar"
      alt="Avatar"
      class="rounded-circle me-2"
      width="40"
      height="40"
    />
    <h5 class="mb-0">{{ chat.name }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultAvatar: "https://example.com/default-avatar.jpg",
    };
  },
};
</script>

<style scoped>
.chat-header {
  background-color: #f8f9fa;
}
</style>
