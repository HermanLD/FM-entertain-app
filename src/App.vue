<script setup>
import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useContentStore } from "@/stores/content";
import IconLogo from "./components/icons/IconLogo.vue";

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

    <!-- App Loader -->
    <Transition name="delay">
      <div
        v-if="content.getContentLoading"
        class="absolute flex justify-center items-center h-screen w-full z-50 top-0 left-0 bg-neutral-2"
      >
        <div><IconLogo class="motion-safe:animate-ping" /></div>
      </div>
    </Transition>
  </div>
</template>

<style>
.delay-leave-active {
  transition: opacity 1.25s ease;
}

.delay-leave-to {
  opacity: 0;
}
</style>
