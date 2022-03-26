import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // TODO - switch to false for production
    isLoggedIn: true,
  }),
  getters: {
    getLoginStatus: (state) => state.isLoggedIn,
  },
  actions: {
    initLoginCheck() {
      const user = useUserStore();
      // TODO - Check localStorage for token
      // TODO - If there is a token ---> fetch user
      // TODO - then isLoggedIn = true
      // ??EX - user.loadUser(email, token);
      user.loadUser();
      // TODO - If no token ---> isLoggedIn = false
      // this.toggleLoginStatus();
    },
    toggleLoginStatus() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
});
