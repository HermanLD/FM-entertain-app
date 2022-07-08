<script setup>
import MainLayout from "@/components/layouts/MainLayout.vue";
import SearchBar from "@/components/SearchBar.vue";
import TrendingRow from "@/components/content/TrendingRow.vue";
import ContentGrid from "@/components/content/ContentGrid.vue";

import { useContentStore } from "@/stores/content";
const content = useContentStore();
</script>

<template>
  <MainLayout>
    <main
      class="w-full max-h-full overflow-visible pb-7 lg:pb-10 lg:pt-16 lg:overflow-auto"
    >
      <!-- <SearchBar /> -->
      <search-bar :content="content.getContentList" />

      <!-- <TrendingRow /> -->
      <h1
        class="mt-5 mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
      >
        Trending
      </h1>
      <trending-row :trendingContent="content.getTrendingList" />

      <!-- <ContentGrid /> -->
      <h2
        class="mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
      >
        Recommended for you
      </h2>
      <content-grid :content="content.getContentList" />
    </main>
  </MainLayout>
</template>
