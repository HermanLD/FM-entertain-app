import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    firstName: "Guest",
    lastName: "Test",
    userName: "testGuest8",
    email: "guestt@test.com",
    image: "@/assets/image-avatar.png",
    bookmarkedContent: [],
  }),
  getters: {
    bookmarkedContentIds: (state) => {
      return state.bookmarkedContent;
    },
  },
  actions: {
    loadUser() {},
    initLoginCheck() {},
  },
});
