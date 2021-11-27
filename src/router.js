import Vue from "vue";
import Router from "vue-router";
// Views
import Home from "./views/Home.vue";
import Auth from "./views/Authentication.vue"
import Register from "./components/Auth/Register.vue";
import Login from "./components/Auth/Login.vue";
import UserDashboard from "./views/User/UserDashboard"

// Route Guards
import validateToken from "./RouteGuards/userGuard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth",
      component: Auth,
      children: [
        {
          path: "login",
          component: Login
        },
        {
          path: "register",
          component: Register
        }
      ]
    },
    {
      path: "/user",
      component: UserDashboard,
      beforeEnter: validateToken,
    }

  ]
})