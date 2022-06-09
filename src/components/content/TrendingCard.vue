<script setup>
const props = defineProps({
  content: {
    type: Object,
  },
});

// TODO - responsive text and spacing
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
    <div class="absolute bottom-0 left-0 pb-6 pl-6">
      <p class="text-neutral-1 text-[12px] font-sans">
        {{ props.content.year }}<span class="mx-2">&#183;</span
        >{{ props.content.category }}<span class="mx-2">&#183;</span
        >{{ props.content.rating }}
      </p>
      <p class="text-white font-sans font-medium body-m">
        {{ props.content.title }}
      </p>
    </div>
  </article>
</template>
