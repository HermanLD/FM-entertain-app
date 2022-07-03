<script setup>
import NavBar from "../Navbar.vue";
</script>

<template>
  <div
    class="grid grid-rows-l-mobile h-screen w-full justify-items-center lg:grid-rows-none lg:grid-cols-l-desktop"
  >
    <!-- 
      Header
        Navbar 
      -->
    <NavBar></NavBar>

    <!-- 
      Main
        Content 
      -->
    <slot></slot>
  </div>
</template>
