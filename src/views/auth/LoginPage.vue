<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100"> 
    <div class="d-flex rounded shadow-lg overflow-hidden auth-container">
     
      <div class="d-none d-md-flex flex-column justify-content-center align-items-center text-white auth-image-section">
        <h1 class="display-4 text-dark mb-3 fw-bold">VSocial</h1>
        <p class="lead text-dark px-3">Connect with friends and the world around you on VSocial.</p>
        <img src="https://d.newsweek.com/en/full/2282869/figures-teamwork-brainstorming.jpg?w=1600&h=1200&q=88&f=4f3d64a95c06b9ec15929fa5973f70d1" alt="VSocial" class="img-fluid rounded mt-3" style="max-width: 80%; height: auto;">
      </div> 

      <!-- form login -->
      <div class="d-flex flex-column justify-content-center align-items-center bg-light p-4 auth-form-section">
        <h1 class="text-center mb-4 text-primary fw-bold">Login</h1>
        <form @submit.prevent="handleLogin" class="w-100" style="max-width: 400px;">
          <div class="mb-3">
            <label for="username" class="form-label">User name:</label>
            <input
              v-model="username"
              id="username"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password"  class="form-label">Password:</label>
            <div class="input-group">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                required
                class="form-control"
              />
              <button
                type="button"
                class="btn-transparent position-absolute top-50 end-0 translate-middle-y"
                @click="togglePasswordVisibility"
                tabindex="-1"
              >
                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" class="fs-5 text-muted p-2"></i>
              </button>
            </div>
            <div class="text-end mt-1">
              <a href="/forgot" class="text-primary text-decoration-none">Forgotten password?</a>
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100 py-2">Login</button>
          <p v-if="authError" class="error mt-2 text-center text-danger">
            {{ authError }}
          </p>
        </form>
        <div class="text-center mt-3">
          <p class="text-muted">Don't have an account? <a href="/register" class="text-primary text-decoration-none">Register Now</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AuthLogin",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["authError"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    handleLogin() {
      this.login({ username: this.username, password: this.password });
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

.card {
  padding: 30px;
  border-radius: 12px;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

.error {
  color: red;
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

@media (max-width: 768px) {
  .auth-image-section {
    display: none;
  }
}
</style>
