<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="d-flex rounded shadow-lg overflow-hidden auth-container">
      <!-- Image Section -->
      <div class="d-none d-md-flex flex-column justify-content-center align-items-center text-white auth-image-section">
        <h1 class="display-4 text-dark mb-3 fw-bold">VSocial</h1>
        <p class="lead text-dark px-3">
          Connect with friends and the world around you on VSocial.
        </p>
        <img
          src="https://d.newsweek.com/en/full/2282869/figures-teamwork-brainstorming.jpg?w=1600&h=1200&q=88&f=4f3d64a95c06b9ec15929fa5973f70d1"
          alt="VSocial" class="img-fluid rounded mt-3" style="max-width: 80%; height: auto" />
      </div>

      <!-- Login Form Section -->
      <div class="d-flex flex-column justify-content-center align-items-center bg-light p-4 auth-form-section">
        <h1 class="text-center mb-4 text-primary fw-bold">Login</h1>
        <form @submit.prevent="handleLogin" class="w-100" style="max-width: 400px">
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input v-model="email" id="email" type="text" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <div class="input-group">
              <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password" class="form-control"
                required />
              <button type="button" class="btn-transparent position-absolute top-50 end-0 translate-middle-y"
                @click="togglePasswordVisibility" tabindex="-1">
                <i :class="showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'" class="fs-5 text-muted p-2"></i>
              </button>
            </div>
          </div>
          <p v-if="loginError" class="error mt-2">
            <i class="bi bi-exclamation-circle-fill me-2"></i>
            {{ loginError }}
          </p>
          <button type="submit" class="btn btn-primary w-100 py-2">
            Login
          </button>
        </form>
        <div class="text-center mt-3">
          <p class="text-muted">
            Don't have an account?
            <a href="/register" class="text-primary text-decoration-none">Register Now</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/service/authService";
import { getMyInfo } from "@/service/userService";
import { mapActions } from "vuex";

export default {
  name: "AuthLogin",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      loginError: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      this.loginError = "";
      if (!this.email || !this.password) {
        this.loginError = "Please fill in all fields!";
        return;
      }
      try {
        const user = await login({
          email: this.email.trim(),
          password: this.password,
        });
        if (user) {
          const token = user.result.token;
          const accountId = user.result.accountId;
          this.$store.dispatch('auth/login', { token, accountId });
          // this.login({ token, accountId });
          this.$router.push("/home");
          this.getMyInfo()
        } else {
          this.loginError = "Incorrect username or password.";
        }
      } catch (error) {
        this.loginError = "Incorrect username or password.";
        console.error("Login failed:", error.message);
      }
    },
    async getMyInfo() {
      const response = await getMyInfo();
      if (response && response.status === 200) {
        const userData = response.data.result
        this.$store.dispatch('auth/setUserData', userData);
      } else {
        console.log("Error");
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  overflow: hidden;
  margin: 0;
}

.container {
  max-width: 900px;
}

.auth-container {
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 500px;
}

.auth-image-section {
  flex: 1;
  color: rgb(29, 26, 26);
  padding: 20px;
  text-align: center;
}

.auth-form-section {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input-group button {
  background: transparent;
  border: none;
  padding: 0;
}

.input-group input {
  padding-right: 40px;
}

.btn-primary {
  background-color: #009345;
  border: none;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 5px;
}

.btn-primary:hover {
  background-color: #007d39;
  transition: background-color 0.3s ease;
}

.text-primary {
  color: #009345 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-center a:hover {
  text-decoration: underline;
}


.error {
  color: #ff4d4d;
  font-size: 0.95rem;
  animation: shake 0.3s ease;
}

/* Thêm hiệu ứng lắc (shake) cho thông báo lỗi. */
@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  25%,
  75% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }
}


@media (max-width: 768px) {
  .auth-image-section {
    display: none;
  }
}
</style>
