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
        <v-text-field
          v-model="passwordConfirm"
          type="password"
          label="Confirm Password"
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
export default {
  name: "Register",
  data: () => ({
    viewName: "Register",
    email: "",
    password: "",
    passwordConfirm: "",
    errors: [],
    isLoading: false,
  }),
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      this.errors = [];
      const [hasError, errors] = this.validateForm();

      if (!hasError) {
        // TODO: send data to API for registration here
        this.isLoading = !this.isLoading;

        const reqObj = {
          email: this.email,
          password: this.password,
        };

        try {
          const { error } = await supabase.auth.signUp(reqObj);

          if (error) throw error;

          this.isLoading = !this.isLoading;
          this.$router.push("/");
        } catch (error) {
          this.isLoading = !this.isLoading;
          alert(error.error_description || error.message);
        }
      } else {
        this.errors = [...errors];
      }
    },
    validateForm() {
      const errors = [];
      let error = false;

      if (this.email.length === 0) {
        errors.push("Please provide an email");
        error = true;
      }

      if (this.password.length === 0) {
        errors.push("Please provide an password");
        error = true;
      }

      if (this.passwordConfirm.length === 0) {
        errors.push("Please confirm password");
        error = true;
      }

      if (
        this.password &&
        this.passwordConfirm &&
        this.password !== this.passwordConfirm
      ) {
        errors.push("Passwords do not match");
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
