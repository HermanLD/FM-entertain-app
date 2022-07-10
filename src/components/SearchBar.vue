<script setup>
import { ref, watch } from "vue";
import Fuse from "fuse.js";
import SearchIcon from "@/components/icons/IconSearch.vue";
// import { computed } from "@vue/reactivity";

const emit = defineEmits(["update:query", "update:result"]);
const prop = defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});

const searchQuery = ref("");
const searchResult = ref([]);

const options = {
  includeScore: true,
  // Search in `title` key
  keys: ["title"],
};

const fuse = new Fuse(prop.content, options);

watch(searchQuery, () => {
  const resultArray = [];
  const rawResult = fuse.search(searchQuery.value);
  rawResult.forEach((x) => {
    resultArray.push(x.item);
  });

  searchResult.value = resultArray;

  emit("update:query", searchQuery.value);
  emit("update:result", searchResult.value);
});
</script>

<template>
  <section class="relative pr-9 pl-9 mt-8 lg:pl-0 lg:mt-0">
    <label class="flex gap-6 text-2xl">
      <search-icon></search-icon>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for movies or TV series"
        class="pb-3.5 w-full body-m text-white placeholder:text-2xl focus:border-b caret-primary bg-transparent focus:border-neutral-1 focus:outline-none"
    /></label>
  </section>
</template>
