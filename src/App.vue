<script setup>
import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useContentStore } from "@/stores/content";

const user = useUserStore();
const content = useContentStore();
const router = useRouter();

const initUserLogin = async () => {
  const isLogged = await user.initUserLogin();
  if (isLogged) router.push({ name: "home" });

  const contentLoaded = await content.loadContent();
  console.log(contentLoaded);
};

initUserLogin();
</script>

<template>
  <div class="relative">
    <RouterView />
    <div
      v-if="content.getContentLoading"
      class="absolute flex justify-center items-center h-screen w-full z-50 top-0 left-0 bg-red-500"
    >
      <div><p>LOADING...</p></div>
    </div>
  </div>
</template>
