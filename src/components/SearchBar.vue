<script setup>
import { ref, watch } from "vue";
import Fuse from "fuse.js";
import SearchIcon from "@/components/icons/IconSearch.vue";

const prop = defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});

const searchQuery = ref("");
const result = ref([]);

const options = {
  includeScore: true,
  // Search in `title` array
  keys: ["title"],
};

const fuse = new Fuse(prop.content, options);

watch(searchQuery, () => {
  result.value = fuse.search(searchQuery.value);
});
</script>

<template>
  <section class="relative pr-9">
    <label class="flex gap-6 text-2xl">
      <search-icon></search-icon>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for movies or TV series"
        class="pb-3.5 w-full body-m text-white placeholder:text-2xl focus:border-b caret-primary bg-transparent focus:border-neutral-1 focus:outline-none"
    /></label>

    <!-- Search Grid -->
    <!-- <div
      v-if="modelValue.length > 0"
      class="absolute left-0 top-full z-40 w-full min-h-screen"
    >
      <p>
        Found {{ searchResults.length }} results for ‘{{ prop.modelValue }}’
      </p>
      <div>
        Content Cards
      </div>
    </div> -->
  </section>
</template>
