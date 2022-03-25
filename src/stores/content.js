import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useContentStore = defineStore({
  id: "content",
  state: () => ({
    contentList: {},
  }),
  getters: {
    getContentList: (state) => state.contentList,
    getMovieList: (state) => state.contentList,
    getTvList: (state) => state.contentList,
    getBookmarkedList: (state) => {
      return state.contentList.filter((media) => media.isBookmarked === true);
    },
  },
  actions: {
    loadContent() {
      const user = useUserStore();
      user.getBookmarkedList.forEach((mediaId) => {
        this.contentList[mediaId].isBookmarked = true;
      });
    },
  },
});
