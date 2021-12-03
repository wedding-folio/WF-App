import Vue from "vue";
import Router from "vue-router";
// Supabase Client
import { supabase } from "./supabaseClient";
// Views
import Home from "./views/Home.vue";
import Auth from "./views/Authentication.vue"
import Register from "./components/Auth/Register.vue";
import Login from "./components/Auth/Login.vue";
import User from "./views/User/User.vue"
import UserDashboard from "./views/User/UserDashboard"
import VueRouter from "vue-router";

// Route Guards
// import validateToken from "./RouteGuards/userGuard";

Vue.use(Router);

const router = new VueRouter({
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
      component: User,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "dashboard",
          component: UserDashboard
        }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  // get current user info
  const currentUser = supabase.auth.user();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/auth/login');
  else if (!requiresAuth && currentUser) next("/user/dashboard");
  else next();
})

export default router;