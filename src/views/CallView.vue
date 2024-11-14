<template>
    <div class="container d-flex flex-column align-items-center mt-5">
      <!-- Header -->
      <h2>Video Call</h2>
  
      <!-- Video Display -->
      <div class="video-container d-flex justify-content-between mt-4">
        <!-- Local video (Self) -->
        <div class="video-box">
          <div v-if="!localStream" class="placeholder">
            <i class="fas fa-user fa-4x"></i>
            <p>You</p>
          </div>
          <video v-else ref="localVideo" autoplay muted></video>
        </div>
  
        <!-- Remote video (Other Person) -->
        <div class="video-box">
          <div v-if="!remoteStream" class="placeholder">
            <i class="fas fa-user fa-4x"></i>
            <p>Other Person</p>
          </div>
          <video v-else ref="remoteVideo" autoplay></video>
        </div>
      </div>
  
      <!-- Control Buttons -->
      <div class="controls mt-4">
        <button @click="startCall" class="btn btn-primary">
          <i class="fas fa-phone"></i> Start Call
        </button>
        <button @click="endCall" class="btn btn-danger" :disabled="!callActive">
          <i class="fas fa-phone-slash"></i> End Call
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CallView',
    data() {
      return {
        localStream: null,
        remoteStream: null,
        callActive: false,
      };
    },
    methods: {
      async startCall() {
        try {
          this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          this.$refs.localVideo.srcObject = this.localStream;
          this.callActive = true;
  
          // Giả lập kết nối với video của người khác
          setTimeout(() => {
            this.remoteStream = this.localStream; // Giả lập remote stream
            this.$refs.remoteVideo.srcObject = this.remoteStream;
          }, 1000);
        } catch (error) {
          console.error('Error accessing media devices.', error);
        }
      },
      endCall() {
        if (this.localStream) {
          this.localStream.getTracks().forEach((track) => track.stop());
          this.localStream = null;
        }
        if (this.remoteStream) {
          this.remoteStream.getTracks().forEach((track) => track.stop());
          this.remoteStream = null;
        }
        this.callActive = false;
      },
    },
  };
  </script>
  
 <style scoped>
  .container {
    max-width: auto;
    text-align: center;
  }
  
  .video-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  
  .video-box {
    width: 45%;
    height: 550px;
    position: relative;
    background: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .placeholder {
    color: #6c757d;
    text-align: center;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .controls button {
    margin: 0 10px;
  }
  </style>
  