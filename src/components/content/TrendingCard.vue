<script setup>
import IconBookmark from "@/components/icons/IconBookmark.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import IconCtgyMovie from "@/components/icons/IconCtgyMovie.vue";
import IconCtgyTv from "@/components/icons/IconCtgyTv.vue";
import useContentStore from "@/stores/content";

const content = useContentStore();

const props = defineProps({
  content: {
    type: Object,
  },
});

const bookmarking = async () => {
  await content.bookmarkContent({
    id: props.content._id,
    newBookmarkState: !props.content.isBookmarked,
  });
};
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
      class="trending-card-ctrls absolute inset-0 grid grid-rows-3 w-full h-full p-6 hover:bg-dark-op"
    >
      <!-- Bookmark / checkbox -->
      <label
        class="trending-card-bookmark p-3 justify-self-end self-start rounded-full cursor-pointer"
      >
        <input
          @click="bookmarking"
          class="trending-card-checkbox sr-only"
          type="checkbox"
          :checked="props.content.isBookmarked"
        />
        <IconBookmark />
      </label>
      <!-- Overlay / Play Button -->
      <button
        class="flex items-center p-2.5 place-self-center rounded-full bg-white-op"
      >
        <IconPlay /><span class="inline-block mr-3 ml-5">Play</span>
      </button>
      <!-- Title & info -->
      <div class="justify-self-start self-end">
        <p class="text-neutral-1 text-base font-sans font-light sm:text-base">
          {{ props.content.year }}<span class="mx-2">&#183;</span
          ><IconCtgyMovie
            class="inline mr-2"
            v-if="props.content.category === 'Movie'"
          /><IconCtgyTv class="inline mr-2" v-else />{{ props.content.category
          }}<span class="mx-2">&#183;</span>{{ props.content.rating }}
        </p>
        <p class="text-white font-sans font-medium text-2xl sm:text-2xl">
          {{ props.content.title }}
        </p>
      </div>
    </div>
  </article>
</template>
