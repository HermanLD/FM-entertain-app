import { defineStore } from "pinia";
import { useUserStore } from "./user";
import contentData from "../data/content.json";

export const useContentStore = defineStore({
  id: "content",
  state: () => ({
    contentList: [],
  }),
  getters: {
    getContentList: (state) => state.contentList,
    getMovieList: (state) => {
      return state.contentList.filter((media) => media.category === "Movie");
    },
    getTvList: (state) => {
      return state.contentList.filter(
        (media) => media.category === "TV Series"
      );
    },
    getBookmarkedList: (state) => {
      return state.contentList.filter((media) => media.isBookmarked === true);
    },
  },
  actions: {
    loadContent() {
      const user = useUserStore();
      console.log(user.image);
      //TODO - Get content as an object
      console.log(contentData);
      //TODO - Bookmark content using users saved media ids
      // user.getBookmarkedList.forEach((mediaId) => {
      //   rawContent[mediaId].isBookmarked = true;
      // });
      //TODO - Stuff keys of objects into objects
      // Object.keys(rawContent).forEach((mediaId) => {
      //   rawContent[mediaId].id = mediaId;
      // });
      //TODO - Turn content Object ---> Array & store
      this.contentList = contentData;
      // this.contentList = Object.values(rawContent);
    },
  },
});
