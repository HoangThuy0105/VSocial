<template>
  <div class="profile-container ms-4">
    <!-- Cover Image -->
    <div class="cover-image position-relative rounded">
      <img
        src="https://media.istockphoto.com/id/1409675326/photo/beautiful-idyllic-sunset-sky.webp?b=1&s=612x612&w=0&k=20&c=0eegVwCp8CDo_LB-Lq4U9PIS4YXWozTUoM2uZ_zYd-4="
        alt="Cover"
        class="cover-img w-100" 
      />
      <!-- Profile Picture and Info -->
      <div class="profile-info position-absolute top-50 start-0 translate-middle-y ms-4 d-flex align-items-center">
        <img
          src="https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png"
          alt="Profile"
          class="rounded-circle border border-white"
          style="width: 100px; height: 100px;"
        />
        <div class="ms-3 text-white">
          <h5 class="mb-0">User</h5>  
        </div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <div class="nav-menu bg-white p-2 d-flex justify-content-around border rounded ">
      <div class="menu-item text-center">
        <i class="bi bi-file-earmark-text cursor-pointer"></i>
        <p class="mb-0">Post</p>
      </div>
      <div class="menu-item text-center">
        <i class="bi bi-image cursor-pointer"></i>
        <p class="mb-0">Image</p>
      </div>
      <div class="menu-item text-center">
        <i class="bi bi-camera-video cursor-pointer"></i>
        <p class="mb-0">Video</p>
      </div>
      <div class="menu-item text-center">
        <i class="bi bi-archive cursor-pointer"></i>
        <p class="mb-0">Archive</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader",
};
</script>

<style scoped>
.cover-image {
  width: 100%;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;   
  border-radius: 8px;
}
 
@media (min-width: 1200px) {  
  .cover-image {
    height: 300px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {  
  .cover-image {
    height: 200px;
  }
}

@media (max-width: 767px) {  
  .cover-image {
    height: 150px;
  }
} 
.nav-menu {
  z-index: 10;
  backdrop-filter: blur(5px);   
}

.profile-info {
  z-index: 2;
}

.menu-item i {
  font-size: 1.5rem;
}

.menu-item p {
  font-size: 0.9rem;
  margin-top: 0.2rem;
}
</style>
