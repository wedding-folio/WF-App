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
        <v-btn type="submit">Submit</v-btn>
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
export default {
  name: "Register",
  data: () => ({
    viewName: "Register",
    email: "",
    password: "",
    errors: [],
  }),
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      this.errors = [];
      const [hasError, errors] = this.validateForm();

      if (!hasError) {
        // TODO: send data to API for registration here
        console.log("FORM IS GOOOOD");
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
