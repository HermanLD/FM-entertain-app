import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    image: "",
    bookmarkedContent: [],
  }),
  getters: {},
  actions: {
    loadContent() {},
  },
});
