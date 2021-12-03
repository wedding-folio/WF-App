import Vue from "vue";

export const authState = Vue.observable({ isLoggedIn: false })

export const authMutations = {
  setUserLoggedIn(newState) {
    authState.isLoggedIn = newState;
  }
}