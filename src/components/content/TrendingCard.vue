<script setup>
const props = defineProps({
  content: {
    type: Object,
  },
});
</script>

<template>
  <article class="relative bg-teal-400 rounded-lg overflow-hidden">
    <img
      class="w-full"
      sizes="(min-width: 900px) 560w, 328w"
      alt="Content title image"
      :src="$image(props.content.thumbnail.regular.small)"
      :srcset="`${$image(props.content.thumbnail.regular.small)} 328w, ${$image(
        props.content.thumbnail.regular.large
      )} 560w`"
    />
    <div class="absolute bottom-0 left-0 text-white">
      <p>
        <span>{{ props.content.year }}</span
        >&#183;<span>{{ props.content.category }}</span
        >&#183;<span>{{ props.content.rating }}</span>
      </p>
      <p>{{ props.content.title }}</p>
    </div>
  </article>
</template>
