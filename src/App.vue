<script setup>
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { useContentStore } from "./stores/content";

const auth = useAuthStore();
const content = useContentStore();
auth.initLoginCheck();
content.loadContent();
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/styles/base.css";
</style>
