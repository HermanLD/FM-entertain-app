import { defineStore } from "pinia";

export const useContentStore = defineStore({
  id: "content",
  state: () => ({
    movieList: [],
    tvList: [],
  }),
  getters: {
    getMovieList: (state) => state.movieList,
    getTvList: (state) => state.tvList,
  },
  actions: {
    loadContent() {},
  },
});
