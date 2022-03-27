<script setup>
import IconNavHome from "./icons/IconNavHome.vue";
import IconNavMovie from "./icons/IconNavMovies.vue";
import IconNavTv from "./icons/IconNavTv.vue";
import IconNavBookmark from "./icons/IconNavBookmark.vue";

import { useUserStore } from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <header>
    <a href="#0"><img src="@/assets/logo.svg" alt="Brand logo" /></a>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <IconNavHome />
          </router-link>
        </li>
        <li>
          <router-link to="/movies">
            <IconNavMovie />
          </router-link>
        </li>
        <li>
          <router-link to="/tv-series">
            <IconNavTv />
          </router-link>
        </li>
        <li>
          <router-link to="/bookmarked">
            <IconNavBookmark />
          </router-link>
        </li>
      </ul>
    </nav>
    <img :src="$image(user.image)" alt="Profile photo" />
  </header>
</template>
