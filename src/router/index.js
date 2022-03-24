import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      // TODO - check if user is logged in
      // TODO - Redirect if not
    },
    // TODO - MOVIE PAGE
    // TODO - TV PAGE
    // TODO - BOOKMARKED PAGE
    // TODO - SIGNIN PAGE
    {
      path: "/movies",
      name: "movies",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MoviesView.vue"),
    },
    {
      path: "/tv-series",
      name: "tv-series",
      component: () => import("../views/TvSeriesView.vue"),
    },
    {
      path: "/bookmarked",
      name: "bookmarked",
      component: () => import("../views/BookmarkedView.vue"),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("../views/SignInView.vue"),
    },
  ],
});

export default router;
