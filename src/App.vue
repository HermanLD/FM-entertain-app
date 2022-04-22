<script setup>
import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useContentStore } from "@/stores/content";

const user = useUserStore();
const content = useContentStore();
const router = useRouter();
const isLoading = content.isLoading;

const logoutAllUsers = async () => {
  try {
    await user.logoutAll();

    router.push({ name: "login" });
  } catch (e) {
    console.log(e);
  }
};
const initUserLogin = async () => {
  const isLogged = await user.initUserLogin();
  if (isLogged) router.push({ name: "home" });
};

initUserLogin();
</script>

<template>
  <RouterView />
  <button class="text-white" @click="logoutAllUsers">LOGOUT ALL</button>
  <!-- loading Screen -->
  <div
    v-if="isLoading"
    class="absolute flex justify-center items-center h-screen w-full top-0 left-0 bg-red-500"
  >
    <div><p>LOADING...</p></div>
  </div>
</template>

<style>
@import "@/assets/styles/base.css";
</style>
