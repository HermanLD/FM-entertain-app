<script setup>
import MainLayout from "@/components/layouts/MainLayout.vue";
import { useContentStore } from "../stores/content";

const content = useContentStore();

content.loadContent();
</script>

<template>
  <MainLayout>
    <main><h1>ALL TELEVISION SHOWS</h1></main>
  </MainLayout>
</template>
