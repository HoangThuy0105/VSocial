<template>
  <div class="register-container">
    <div class="row register-content shadow-lg">
      <!-- Register Form Section -->
      <div class="col-12 col-md-6 register-form">
        <h1 class="text-center mb-4 text-primary fw-bold">Register</h1>
        <form @submit.prevent="handleRegister">
          <!-- Username -->
          <div class="mb-3">
            <label for="username" class="form-label">User name:</label>
            <input
              v-model="username"
              type="text"
              id="username"
              required
              class="form-control"
            />
          </div>

          <!-- Phone Number -->
          <div class="mb-3">
            <label for="phone" class="form-label">Phone number:</label>
            <input
              v-model="phone"
              type="tel"
              id="phone"
              required
              class="form-control"
            />
          </div>

          <!-- email -->
          <div class="mb-3">
            <label for="phone" class="form-label">Email:</label>
            <input
              v-model="email"
              type="tel"
              id="phone"
              required
              class="form-control"
            />
          </div>

          <!-- Password -->
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
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
              >
                <i
                  :class="showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'"
                  class="fs-5 p-2 p-2"
                ></i>
              </button>
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="mb-3">
            <label for="confirmPassword" class="form-label"
              >Confirm Password:</label
            >
            <div class="input-group">
              <input
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                id="confirmPassword"
                required
                class="form-control"
              />
              <button
                type="button"
                class="btn-transparent position-absolute top-50 end-0 translate-middle-y"
                @click="toggleConfirmPasswordVisibility"
              >
                <i
                  :class="showConfirmPassword ? 'bi bi-eye' : 'bi bi-eye-slash'"
                  class="fs-5 p-2"
                ></i>
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2 form-label">
            Sign Up
          </button>
          <p v-if="authError" class="error text-danger mt-2">{{ authError }}</p>
        </form>

        <div class="text-center mt-3">
          <p class="text-muted">
            Already have an account?
            <a href="/" class="text-primary text-decoration-none">Log in now</a>
          </p>
        </div>
      </div>

      <!-- Register Image Section -->
      <div class="col-md-6 d-none d-md-flex register-image text-center">
        <h1 class="display-4 text-dark mb-3 fw-bold mt-3">VSocial</h1>
        <p class="slogan">
          Connect with friends and the world around you on VSocial
        </p>
        <img
          src="https://hevalia.com/wp-content/uploads/2024/03/social-media-2314696_640.jpg"
          alt="VSocial Logo"
          class="logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import authService from "@/service/authService";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      email: "",
      showPassword: false,
      showConfirmPassword: false,
      authError: null,
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.authError = "Passwords do not match!";
        return;
      }

      try {
        const response = await authService.register({
          username: this.username,
          password: this.password,
          phone: this.phone,
          email: this.email,
        });
        console.log("Đăng ký thành công", response.data);

        this.$router.push("/");
        // } catch (error) {
        //   console.error("Registration failed", error.response?.data || error.message);
        //   this.authError = error.response?.data?.message || "Có lỗi xảy ra.";
        // }
      } catch (error) {
        if (error.response) {
          this.authError =
            error.response.data?.message || "Có lỗi xảy ra từ server.";
        } else if (error.request) {
          this.authError =
            "Không thể kết nối đến server. Vui lòng kiểm tra mạng.";
        } else {
          this.authError = `Lỗi không xác định: ${error.message}`;
        }
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
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
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.register-content {
  display: flex;
  max-width: 800px;
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.register-form {
  padding: 20px;
  background-color: #f8f9fa;
}

.register-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.register-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

h2 {
  font-size: 1.8rem;
  color: #007bff;
  text-align: center;
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

.register-image .slogan {
  font-size: 1.1rem;
  color: #6c757d;
  margin-top: 10px;
  text-align: center;
}
</style>
