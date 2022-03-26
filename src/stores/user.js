import { defineStore } from "pinia";
import userData from "../data/user.json";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    image: "",
    // bookmarkedContent: [],
  }),
  getters: {
    bookmarkedContentIds: (state) => {
      return state.bookmarkedContent;
    },
  },
  actions: {
    loadUser(email = "test@test.com", token = "qwerty1234") {
      // TODO - Fetch user
      console.log(email);
      console.log(token);
      console.log(userData);
      // TODO - Store user data
      this.image = userData.image;
      // this.image = userData.image;
      // TODO - Add real bookmarked content later
      // this.bookmarkedContent = userData.bookmarkedContent;
    },
  },
});
