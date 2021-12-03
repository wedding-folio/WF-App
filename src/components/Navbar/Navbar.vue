<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <h1>Wedding Folio</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn text v-if="!isLoggedIn" to="/auth/register"> Sign Up </v-btn>
    <v-btn text v-if="!isLoggedIn" to="/auth/login"> Login </v-btn>
    <v-btn text v-if="isLoggedIn" @click="handleSignOut">Sign Out</v-btn>
  </v-app-bar>
</template>

<script>
import { supabase } from "../../supabaseClient"
import { authState, authMutations } from "../../observables/userLoginObservable";

export default {
  name: "Navbar",
  computed: {
    isLoggedIn() {
      return authState.isLoggedIn;
    }
  },
  methods: {
    async handleSignOut() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;

        authMutations.setUserLoggedIn(false);
        await this.$router.push("/auth/login");
      } catch (error) {
        alert(error.error_description || error.message);
      }
    },
  },
};
</script>
