<script setup>
import IconNavHome from "@/components/icons/IconNavHome.vue";
import IconNavMovie from "@/components/icons/IconNavMovies.vue";
import IconNavTv from "@/components/icons/IconNavTv.vue";
import IconNavBookmark from "@/components/icons/IconNavBookmark.vue";

import useUserStore from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <header
    class="sticky inset-0 z-50 self-center grid grid-cols-nav-mobile lg:h-[90%] px-4 py-[1.125rem] bg-neutral-2 md:p-6 w-full lg:static lg:rounded-[20px] lg:p-10 lg:w-auto lg:grid-cols-1 lg:grid-rows-nav-desktop lg:mx-10"
  >
    <a class="flex justify-center items-center mb-0 lg:mb-[4.687rem]" href="#0"
      ><img src="@/assets/logo.svg" alt="Brand logo"
    /></a>

    <nav class="grid grid-col-1 items-center">
      <ul class="flex justify-center items-center gap-10 lg:flex-col">
        <li class="flex justify-center">
          <router-link to="/">
            <IconNavHome />
          </router-link>
        </li>
        <li class="flex justify-center">
          <router-link to="/movies">
            <IconNavMovie />
          </router-link>
        </li>
        <li class="flex justify-center">
          <router-link to="/tv-series">
            <IconNavTv />
          </router-link>
        </li>
        <li class="flex justify-center">
          <router-link to="/bookmarked">
            <IconNavBookmark />
          </router-link>
        </li>
      </ul>
    </nav>

    <div
      class="self-end w-10 h-10 border-2 border-white border-solid rounded-full overflow-hidden"
    >
      <img
        src="../assets/image-avatar.png"
        alt="Profile photo"
        v-if="!user.avatar"
      />
    </div>
  </header>
</template>

<style>
.router-link-active path {
  fill: theme("colors.white");
}
</style>
