<script setup>
import { ref } from "vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import SearchBar from "@/components/SearchBar.vue";
import ContentGrid from "@/components/content/ContentGrid.vue";

import useContentStore from "@/stores/content";
const content = useContentStore();

const querySearch = ref("");
const queryResult = ref([]);

content.loadContent();
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
        :content="content.getSeriesList"
      />

      <div v-if="queryResult.length === 0">
        <!-- <ContentGrid /> -->
        <h1
          class="mt-5 mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
        >
          TV Series
        </h1>
        <content-grid :content="content.getSeriesList" />
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
    </main>
  </main-layout>
</template>
