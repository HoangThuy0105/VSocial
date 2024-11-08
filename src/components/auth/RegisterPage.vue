<template> 
  <div class="register">
    <h2>Đăng Ký</h2>
    <form @submit.prevent="handleRegister">
      <!-- Tên đăng nhập -->
      <div class="mb-3">
        <label for="username">Tên đăng nhập</label>
        <input 
          v-model="username" 
          type="text" 
          id="username" 
          required 
          placeholder="Tên đăng nhập"
          class="form-control"
        />
      </div>

      
      

      <!-- Email -->
      <!-- <div class="mb-3">
        <label for="email">Email</label>
        <input 
          v-model="email" 
          type="email" 
          id="email" 
          required 
          placeholder="Email của bạn"
          class="form-control"
        />
      </div> -->


      <div class="mb-3">
        <label for="phone">Số điện thoại</label>
        <input 
          v-model="phone" 
          type="tel" 
          id="phone" 
          required 
          placeholder="Số điện thoại"
          class="form-control"
        />
      </div>


      <div class="mb-3">
        <label for="dob">Ngày tháng năm sinh</label>
        <input 
          v-model="dob" 
          type="date" 
          id="dob" 
          required 
          class="form-control"
        />
      </div>
      <!-- Mật khẩu -->
      <div class="mb-3">
        <label for="password">Mật khẩu</label>
        <div class="input-group">
          <input 
            v-model="password" 
            :type="showPassword ? 'text' : 'password'" 
            id="password" 
            required 
            placeholder="Mật khẩu"
            class="form-control"
          />
          <button 
            type="button" 
            class="btn-transparent position-absolute top-50 end-0 translate-middle-y" 
            @click="togglePasswordVisibility">
            <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" class="fs-5"></i>
          </button>
        </div>
      </div>

      <!-- Nhắc lại mật khẩu -->
      <div class="mb-3">
        <label for="confirmPassword">Nhắc lại mật khẩu</label>
        <div class="input-group">
          <input 
            v-model="confirmPassword" 
            :type="showConfirmPassword ? 'text' : 'password'" 
            id="confirmPassword" 
            required 
            placeholder="Nhắc lại mật khẩu"
            class="form-control"
          />
          <button 
            type="button" 
            class="btn-transparent position-absolute top-50 end-0 translate-middle-y" 
            @click="toggleConfirmPasswordVisibility">
            <i :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" class="fs-5"></i>
          </button>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary w-100 py-2">Đăng Ký</button>
      <p v-if="authError" class="error text-danger mt-2">{{ authError }}</p>


      <!-- <div class="text-center mt-3">
        <button class="btn btn-danger w-100 py-2" @click="handleGoogleLogin">
          Đăng nhập bằng Google
        </button>
      </div> -->
      
    </form>

    <div class="text-center mt-3">
      <p class="text-muted">Bạn đã có tài khoản? <a href="/login" class="text-primary text-decoration-none">Đăng nhập ngay</a></p>
    </div>
  </div>
 
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AuthRegister',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      // email: '',
      phone: '',
      dob: '', //ngày tháng năm sinh
      showPassword: false,
      showConfirmPassword: false
    };
  },
  computed: {
    ...mapGetters('auth', ['authError'])
  },
  methods: {
    ...mapActions('auth', ['register']),
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.authError = "Mật khẩu và nhắc lại mật khẩu không khớp.";
        return;
      }
      this.register({
        username: this.username,
        password: this.password,
        // email: this.email,
        phone: this.phone,
        dob: this.dob
      });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    // handleGoogleLogin() {
       
    //   console.log('Đăng nhập bằng Google');
    // }
  }
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  
  padding: 20px;
  
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  color: #007bff;
  text-align: center;
}

.mb-3 {
  margin-bottom: 1rem;
}

.form-control {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.error {
  color: red;
}

.input-group {
  position: relative;
}

.input-group button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 5px;
}

.btn-danger {
  background-color: #db4437;
  border: none;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 5px;
}

.text-muted {
  color: #6c757d !important;
}

.text-primary {
  color: #007bff !important;
}

.text-center a:hover {
  text-decoration: underline;
}

.text-danger {
  font-size: 0.9rem;
  color: red;
}
</style>
