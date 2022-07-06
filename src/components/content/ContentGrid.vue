<script setup>
import ContentCard from "./ContentCard.vue";

const prop = defineProps({
  content: {
    type: Object,
    default: undefined,
  },
});
</script>

<template>
  <section class="grid content-grid gap-3.5 sm:gap-7 lg:gap-10">
    <ContentCard
      v-for="item in prop.content"
      :key="item._id"
      :content="item"
    ></ContentCard>
  </section>
</template>

<style>
.content-grid {
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
}
</style>
