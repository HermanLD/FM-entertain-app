<script setup>
import IconNavHome from "./icons/IconNavHome.vue";
import IconNavMovie from "./icons/IconNavMovies.vue";
import IconNavTv from "./icons/IconNavTv.vue";
import IconNavBookmark from "./icons/IconNavBookmark.vue";

import { useUserStore } from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <header
    class="flex flex-col justify-between items-center bg-neutral-2 p-10 rounded-[20px] my-10"
  >
    <div>
      <a class="inline-block mb-[4.687rem]" href="#0"
        ><img src="@/assets/logo.svg" alt="Brand logo"
      /></a>
      <nav>
        <ul>
          <li class="flex justify-center mb-10">
            <router-link to="/">
              <IconNavHome />
            </router-link>
          </li>
          <li class="flex justify-center mb-10">
            <router-link to="/movies">
              <IconNavMovie />
            </router-link>
          </li>
          <li class="flex justify-center mb-10">
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
    </div>

    <div class="w-10 h-10">
      <img
        v-if="!user.avatar"
        src="../assets/image-avatar.png"
        alt="Profile photo"
      />
    </div>
  </header>
</template>

<style>
.router-link-active path {
  fill: theme("colors.white");
}
</style>
