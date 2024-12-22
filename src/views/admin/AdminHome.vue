<template>
  <div>
    <!-- Sử dụng component AdminSidebar ở đây -->
    <AdminSidebar />
    <!-- Nội dung của AdminHome -->
    <h1>Welcome to Admin Dashboard</h1>
  </div>
</template>

<script>
import AdminSidebar from "@/components/admin/AdminSidebar.vue"; // Đảm bảo rằng bạn đã import đúng

export default {
  components: {
    AdminSidebar, // Đăng ký component AdminSidebar
  },
};
</script>

<style scoped>
/* Các style của AdminHome.vue */
</style>
