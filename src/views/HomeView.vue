<script setup>
import MainLayout from "@/components/layouts/MainLayout.vue";
import TrendingRow from "@/components/content/TrendingRow.vue";
import { useContentStore } from "../stores/content";

const content = useContentStore();

content.loadContent();
</script>

<template>
  <MainLayout>
    <main class="w-full max-h-full bg-lime-900">
      <h1 class="text-white font-sans font-light text-[1.25rem] sm:text-3xl">
        Trending
      </h1>
      <!-- <SearchBar /> -->
      <!-- <TrendingRow /> -->
      <TrendingRow></TrendingRow>
      <!-- <ContentGrid /> -->
    </main>
  </MainLayout>
</template>
