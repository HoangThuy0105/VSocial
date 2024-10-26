<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Đăng Bài</h2>
      <textarea v-model="postContent" placeholder="Chia sẻ điều gì đó..."></textarea>
      <button @click="submitPost">Đăng</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      postContent: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitPost() {
      // Logic để xử lý đăng bài
      console.log(this.postContent);
      this.closeModal(); // Đóng modal sau khi đăng
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
</style>
