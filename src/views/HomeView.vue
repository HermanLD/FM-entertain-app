<script setup>
import MainLayout from "@/components/layouts/MainLayout.vue";
import { useContentStore } from "../stores/content";

const content = useContentStore();

content.loadContent();
</script>

<template>
  <MainLayout>
    <main class="w-full max-h-full bg-lime-900">
      <h1>THIS IS HOME BASE!!!!</h1>
      <!-- <SearchBar /> -->
      <!-- <TrendingRow /> -->
      <!-- <ContentGrid /> -->
    </main>
  </MainLayout>
</template>
