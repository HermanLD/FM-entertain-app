<script setup>
import NavBar from "../Navbar.vue";
</script>

<template>
  <div class="grid d-layout-grid h-screen w-full justify-items-center">
    <!-- 
      Header
        Navbar 
      -->
    <NavBar></NavBar>

    <slot></slot>
  </div>
</template>

<style>
.d-layout-grid {
  grid-template-columns: 200px 1fr;
}
</style>
