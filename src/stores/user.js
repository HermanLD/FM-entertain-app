import { defineStore } from "pinia";
import userTestData from "../data/user.json";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    image: "",
    formData: null,
    // bookmarkedContent: [],
  }),
  // getters: {
  //   bookmarkedContentIds: (state) => {
  //     return state.bookmarkedContent;
  //   },
  // },
  actions: {
    loadUser() {
      console.log(this.formData);
      console.log(userTestData);
      this.image = userTestData.image;
      // TODO - Fetch user
      // TODO - Store user data
      // this.image = userData.image;
      // TODO - Add real bookmarked content later
      // this.bookmarkedContent = userData.bookmarkedContent;
      // TODO - Clear formData
    },
    signInUser() {
      console.log(this.formData);
      // TODO - Send user data
      // TODO - If '200', toggle login status & add data to local storage
      // TODO - Clear formData
    },
    updateFormData(newFormData) {
      this.formData = newFormData;
    },
  },
});
