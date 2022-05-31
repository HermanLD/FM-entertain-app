<script setup>
const props = defineProps({
  content: {
    type: Object,
  },
});
</script>

<template>
  <article class="relative h-[29.375rem]">
    <img
      class="absolute inset-0 w-full"
      sizes="(min-width: 900px) 560w, 328w"
      alt="Content title image"
      :src="$image(props.content.thumbnail.regular.small)"
      :srcset="`${$image(props.content.thumbnail.regular.small)} 328w, ${$image(
        props.content.thumbnail.regular.large
      )} 560w`"
    />
    <p>
      <span>{{ props.year }}</span
      >&#183;<span>{{ props.category }}</span
      >&#183;<span>{{ props.rating }}</span>
    </p>
    <p>{{ props.title }}</p>
  </article>
</template>
