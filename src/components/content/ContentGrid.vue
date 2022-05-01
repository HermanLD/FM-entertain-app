<script setup>
import ContentCard from "./ContentCard";
</script>

<template>
  <section>
    <slot name="header"></slot>
    <div class="grid content-grid gap-3.5 sm:gap-7 lg:gap-10">
      <ContentCard></ContentCard>
    </div>
  </section>
</template>

<style>
.content-grid {
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
}
</style>
