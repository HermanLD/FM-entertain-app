<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useUserStore from "@/stores/user";
import MainLayout from "@/components/layouts/MainLayout.vue";
import SearchBar from "@/components/SearchBar.vue";
import ContentGrid from "@/components/content/ContentGrid.vue";

import useContentStore from "@/stores/content";

const router = useRouter();
const user = useUserStore();
const content = useContentStore();

const querySearch = ref("");
const queryResult = ref([]);

const logoutAllUsers = async () => {
  try {
    await user.logoutAll();

    router.push({ name: "login" });
  } catch (e) {
    console.log(e);
  }
};

const bookmarkedMovies = computed(() => {
  const newList = content.getBookmarkedList.filter(
    (contentItem) => contentItem.category === "Movie"
  );
  if (newList.length === 0) {
    return false;
  }
  return newList;
});
const bookmarkedSeries = computed(() => {
  const newList = content.getBookmarkedList.filter(
    (contentItem) => contentItem.category === "TV Series"
  );
  if (newList.length === 0) {
    return false;
  }
  return newList;
});
</script>

<template>
  <main-layout>
    <main
      v-if="!content.getContentLoading"
      class="w-full max-h-full overflow-visible pb-7 lg:pb-10 lg:pt-16 lg:overflow-auto"
    >
      <!-- <SearchBar /> -->
      <search-bar
        v-model:query="querySearch"
        v-model:result="queryResult"
        :content="content.getBookmarkedList"
      />

      <div v-if="queryResult.length === 0">
        <!-- <ContentGrid /> -->
        <h1
          class="mt-5 mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
        >
          Bookmarked Movies
        </h1>
        <div>
          <p
            class="mt-5 mb-12 text-white text-center font-sans font-light text-[1.5rem] sm:text-4xl"
            v-if="!bookmarkedMovies"
          >
            You have no Movies Bookmarked
          </p>
          <content-grid v-else :content="bookmarkedMovies" />
        </div>
        <h2
          class="mt-5 mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
        >
          Bookmarked TV Series
        </h2>
        <div>
          <p
            class="mt-5 mb-12 text-white text-center font-sans font-light text-[1.5rem] sm:text-4xl"
            v-if="!bookmarkedSeries"
          >
            You have no TV Series Bookmarked
          </p>
          <content-grid v-else :content="bookmarkedSeries" />
        </div>
      </div>

      <!-- Search Query Grid -->
      <div v-else class="min-h-screen">
        <p
          class="mt-5 mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
        >
          Found {{ queryResult.length }} results for ‘{{ querySearch }}’
        </p>
        <content-grid :content="queryResult" />
      </div>
      <button class="text-primary m-20" @click="logoutAllUsers">LOGOUT</button>
    </main>
  </main-layout>
</template>
