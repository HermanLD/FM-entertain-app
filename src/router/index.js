import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

// TODO - check if user is logged in
// TODO - Redirect if not

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      meta: { requiresAuth: true },
      component: () => import("../views/MoviesView.vue"),
    },
    {
      path: "/tv-series",
      name: "tv-series",
      meta: { requiresAuth: true },
      component: () => import("../views/TvSeriesView.vue"),
    },
    {
      path: "/bookmarked",
      name: "bookmarked",
      meta: { requiresAuth: true },
      component: () => import("../views/BookmarkedView.vue"),
    },
    {
      path: "/avatar-upload",
      name: "avatar-upload",
      meta: { requiresAuth: true },
      component: () => import("../views/AvatarUploadView.vue"),
    },
    {
      path: "/sign-up",
      name: "sign-up",
      meta: { requiresAuth: false },
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { requiresAuth: false },
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  // if (!to.meta.requiresAuth && !auth.isLoggedIn) {
  //   next({ name: "sign-in" });
  // } else next();
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next({ name: "login" });
  } else if (!to.meta.requiresAuth && auth.isLoggedIn) {
    return false;
  } else {
    next();
  }
});

export default router;
