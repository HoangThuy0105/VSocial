<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
  <div class="card p-4 shadow-sm shadow-lg" style="max-width: 550px; width: 100%;">
    <h2 class="text-primary fw-bold mb-3">Find Your Account</h2>
    <p class="text-muted mb-4">
      Please enter your phone number to search for your account.
    </p>
    
    <form @submit.prevent="handleFindAccount">
      <div class="mb-3">
        <label for="contactInfo" class="form-label">Phone number:</label>
        <input 
          v-model="contactInfo" 
          type="text" 
          id="contactInfo" 
          required 
           
          class="form-control"
        />
      </div>
      
      <button type="submit" class="btn btn-primary w-100">Submit</button>
      <div class="text-center mt-3">
           <p><a href="/login" class="text-primary text-decoration-none">Back to Sign In</a></p>
        </div>
    </form>
  </div>
</div>

</template>

<script>
export default {
  name: 'ForgotPage',
  data() {
    return {
      contactInfo: ''
    };
  },
  methods: {
    handleFindAccount() { 
      console.log('Submitted:', this.contactInfo); 
    }
  }
};
</script>


<style>

</style>