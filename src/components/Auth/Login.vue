<template>
  <div>
    <v-container>
      <h2>{{ viewName }}</h2>
      <v-form @submit="handleSubmit">
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
        ></v-text-field>
        <v-btn type="submit" :loading="isLoading" :disabled="isLoading"
          >Submit</v-btn
        >
      </v-form>
      <ul class="error-list">
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";
import { supabase } from "../../supabaseClient";
import { authMutations } from "../../observables/userLoginObservable";

export default {
  name: "Register",
  data: () => ({
    viewName: "Login",
    email: "",
    password: "",
    errors: [],
    isLoading: false,
  }),
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      this.errors = [];
      const [hasError, errors] = this.validateForm();

      if (!hasError) {
        this.isLoading = !this.isLoading;

        const reqObj = {
          email: this.email,
          password: this.password,
        };

        try {
          const { error, user } = await supabase.auth.signIn(reqObj);
          if (error) throw error;
          
          localStorage.setItem("user", JSON.stringify(user));

          authMutations.setUserLoggedIn(true);

          this.$router.push("/user/dashboard");
        } catch (error) {
          alert(error.error_description || error.message);
        }
        
        this.isLoading = !this.isLoading;

      } else {
        this.errors = [...errors];
      }
    },
    validateForm() {
      const errors = [];
      let error = false;

      if (!this.email.length && !this.password) {
        errors.push("Please enter your email and password");
        error = true;
      } else if (this.email.length === 0) {
        errors.push("Please enter email");
        error = true;
      } else if (this.password.length === 0) {
        errors.push("Please enter password");
        error = true;
      }

      return [error, errors];
    },
  },
};
</script>

<style scoped>
.error-list {
  color: red;
}
</style>
