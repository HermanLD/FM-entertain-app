<script setup>
import IconBookmark from "@/components/icons/IconBookmark.vue";
import IconPlay from "@/components/icons/IconPlay.vue";

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
    <div
      class="trending-card-ctrls absolute inset-0 flex flex-col justify-between w-full h-full p-6 hover:bg-dark-op"
    >
      <!-- Bookmark / checkbox -->
      <label
        class="trending-card-bookmark p-3 self-end rounded-full cursor-pointer"
      >
        <input class="trending-card-checkbox sr-only" type="checkbox" checked />
        <IconBookmark />
      </label>
      <!-- Overlay / Play Button -->
      <button class="items-center p-2.5 self-center rounded-full bg-white-op">
        <IconPlay /><span class="inline-block mr-3 ml-5">Play</span>
      </button>
      <!-- Title & info -->
      <div>
        <p class="text-neutral-1 text-[12px] font-sans font-light sm:text-base">
          {{ props.content.year }}<span class="mx-2">&#183;</span
          >{{ props.content.category }}<span class="mx-2">&#183;</span
          >{{ props.content.rating }}
        </p>
        <p class="text-white font-sans font-medium text-base sm:text-2xl">
          {{ props.content.title }}
        </p>
      </div>
    </div>
  </article>
</template>

<style>
.trending-card-ctrls > button {
  @apply hidden;
}

.trending-card-ctrls:hover > button {
  @apply flex;
}

.trending-card-bookmark {
  @apply bg-dark-op hover:bg-white;
}

.trending-card-bookmark:hover path {
  stroke: theme("colors.dark");
}

.trending-card-checkbox:checked path {
  fill: theme("colors.white");
}
</style>
