<script setup>
import MainLayout from "@/components/layouts/MainLayout.vue";
import TrendingRow from "@/components/content/TrendingRow.vue";
import ContentGrid from "@/components/content/ContentGrid.vue";
</script>

<template>
  <MainLayout>
    <main
      class="w-full max-h-full overflow-visible pb-7 lg:pb-10 lg:overflow-auto"
    >
      <!-- <SearchBar /> -->
      <!-- <TrendingRow /> -->
      <h1
        class="mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
      >
        Trending
      </h1>
      <TrendingRow></TrendingRow>
      <!-- <ContentGrid /> -->
      <h2
        class="mb-6 text-white font-sans font-light text-[1.25rem] sm:text-3xl"
      >
        Recommended for you
      </h2>
      <ContentGrid></ContentGrid>
    </main>
  </MainLayout>
</template>
