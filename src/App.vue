<script setup>
import { RouterView, useRouter } from "vue-router";
import useContentStore from "@/stores/content";
import useUserStore from "@/stores/user";
import { useHead } from "@vueuse/head";
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

useHead({
  meta: [
    { property: "og:title", content: "Fullstack Entertainment App" },
    {
      property: "og:description",
      content:
        "Fullstack app with home-baked auth and sessions. Built using Vue, Node, Express, and MongoDB ",
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/nimbus8/image/upload/v1658810908/Portfolio/entertainment-app_psqwkn.png",
    },
    { property: "og:url", content: "https://fm-entertain-app.vercel.app/" },
  ],
});

initUserLogin();
</script>

<template>
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
</template>

<style>
.delay-leave-active {
  transition: opacity 1.25s ease;
}

.delay-leave-to {
  opacity: 0;
}
</style>
