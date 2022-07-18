import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { useUserStore } from "./user";

const url = import.meta.env.VITE_BACKEND_URL;

export const useContentStore = defineStore({
  id: "content",
  state: () => ({
    contentList: [],
    isLoading: false,
  }),
  getters: {
    getContentLoading: (state) => state.isLoading,
    getContentList: (state) => state.contentList,
    getMovieList: (state) => {
      const newList = state.contentList.filter(
        (content) => content.category === "Movie"
      );
      return newList;
    },
    getSeriesList: (state) => {
      const newList = state.contentList.filter(
        (content) => content.category === "TV Series"
      );
      return newList;
    },
    getTrendingList: (state) => {
      const newList = state.contentList.filter(
        (content) => content.isTrending === true
      );
      return newList;
    },
    getBookmarkedList: (state) => {
      const newList = state.contentList.filter(
        (content) => content.isBookmarked === true
      );
      return newList;
    },
  },
  actions: {
    async loadContent() {
      const auth = useAuthStore();
      const token = auth.checkAuthToken();

      if (this.contentList.length > 0)
        return console.log("Content already loaded");
      try {
        this.isLoading = true;
        const res = await fetch(`${url}/content`, {
          method: "GET", // or 'PUT'
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const resData = await res.json();

        this.setContent(resData);
        this.isLoading = false;
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    async bookmarkContent(contentLoot) {
      console.log(contentLoot);

      const user = useUserStore();

      // ? - { id: "", newBookmarkState: false } = contentLoot
      const newArr = [];

      this.contentList.forEach((el) => {
        if (el._id === contentLoot.id) {
          el.isBookmarked = !el.isBookmarked;
        }

        newArr.push(el);
      });

      this.setContent(newArr);

      if (contentLoot.newBookmarkState) {
        try {
          await user.addBookmark(contentLoot.id);
          console.log(contentLoot.id);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          await user.deleteBookmark(contentLoot.id);
          console.log(contentLoot.id);
        } catch (e) {
          console.log(e);
        }
      }
    },
    setContent(content) {
      this.contentList = content;
    },
  },
});
