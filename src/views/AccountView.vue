<template>
  <div class="account">
    <div class="d-flex justify-content-between">
      <h1 class="text-center">VSocial</h1>
      <div>
        <button @click="currentPage = 'login'" class="btn btn-link btn-custom mt-2" style="text-decoration: none">Đăng Nhập</button>
        <button @click="currentPage = 'register'" class="btn btn-link btn-custom mt-2" style="text-decoration: none">Đăng Ký</button>
      </div>
    </div> 
    <LoginPage v-if="currentPage === 'login'" /> 
    <RegisterPage v-if="currentPage === 'register'" />
  </div>
</template>

<script>
import LoginPage from '@/components/auth/LoginPage.vue';
import RegisterPage from '@/components/auth/RegisterPage.vue';

export default {
  name: 'AccountView',
  components: {
    LoginPage,
    RegisterPage
  },
  data() {
    return {
      currentPage: 'login'  
    };
  }
};
</script>

<style scoped>

button {
  margin-left: 10px;
}

/* Thêm style đẹp cho button */
.btn-custom {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
    
.btn-custom:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  color:  #fff;
}

.btn-custom:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
