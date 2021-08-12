<template>
  <div>
    <div>
      <router-link to="/auth/register">Register</router-link>
      <router-link to="/auth/login">Login</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    //
  },
};
</script>
