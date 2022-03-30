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
    loadUser(userObj) {
      console.log(userObj);
      // TODO - Fetch user
      console.log(userData);
      // TODO - Store user data
      this.image = userData.image;
      // this.image = userData.image;
      // TODO - Add real bookmarked content later
      // this.bookmarkedContent = userData.bookmarkedContent;
    },
    signInUser(userObj) {
      console.log(userObj);
      // TODO - Send user data
      // TODO - If '200', toggle login status & add data to local storage
    },
  },
});
