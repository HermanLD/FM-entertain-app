import { defineStore } from "pinia";

const localTokenName = import.meta.env.VITE_LOCALSTORE_TOKEN;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // TODO - switch to false for production
    isLoggedIn: false,
  }),
  getters: {
    getLoginStatus: (state) => state.isLoggedIn,
  },
  actions: {
    setAuthToken(token) {
      localStorage.setItem(localTokenName, token);
    },
    checkAuthToken() {
      // ? - returns token or null
      return localStorage.getItem(localTokenName);
    },
    clearAuthToken() {
      localStorage.removeItem(localTokenName);
    },
    toggleLoginStatus(newState) {
      this.isLoggedIn = newState;
    },
  },
});
