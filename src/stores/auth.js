import { defineStore } from "pinia";

const localTokenName = import.meta.env.VITE_LOCALSTORE_TOKEN;

export default defineStore({
  id: "auth",
  state: () => ({
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
