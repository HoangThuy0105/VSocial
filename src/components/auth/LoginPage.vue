<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card p-4 shadow-lg" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4 text-primary">VSocial Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">UserName</label>
          <input 
            v-model="username" 
            id="username" 
            type="text" 
            placeholder="Email address or phone number" 
            class="form-control" 
            required 
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group position-relative">
            <input 
              v-model="password" 
              id="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Password"
              class="form-control" 
              required 
            />
            <button 
              type="button" 
              class="btn-transparent position-absolute top-50 end-0 translate-middle-y" 
              @click="togglePasswordVisibility" 
              tabindex="-1">
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" class="fs-5 text-muted"></i>
            </button>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100 py-2">Login</button>
        <p v-if="authError" class="error mt-2 text-center text-danger">{{ authError }}</p>
      </form>
      <div class="text-center mt-3">
        <p class="text-muted">You do not have an account? <a href="/register" class="text-primary text-decoration-none">Register Now</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AuthLogin',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false  
    };
  },
  computed: {
    ...mapGetters('auth', ['authError'])
  },
  methods: {
    ...mapActions('auth', ['login']),
    handleLogin() {
      this.login({ username: this.username, password: this.password });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;  
    }
  }
};
</script>

<style scoped> 
html, body {
  height: 100%;
  overflow: hidden;  
  margin: 0;
}
 
.bg-light {
  background-color: #f7f7f7 !important;
}

.login {
  background-color: #f2f4f7;
}

.card {
  max-width: 400px;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
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
  padding: 2;
}

.input-group input {
  padding-right: 40px;  
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 5px;
}

.text-primary {
  color: #007bff !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-center a:hover {
  text-decoration: underline;
}
</style>
