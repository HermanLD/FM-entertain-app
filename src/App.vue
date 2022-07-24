<script setup>
import { RouterView, useRouter } from "vue-router";
import useContentStore from "@/stores/content";
import useUserStore from "@/stores/user";
import IconLogo from "./components/icons/IconLogo.vue";

const content = useContentStore();
const user = useUserStore();
const router = useRouter();

const initUserLogin = async () => {
  const isLogged = await user.initUserLogin();
  if (isLogged) {
    router.push({ name: "home" });
  }
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
