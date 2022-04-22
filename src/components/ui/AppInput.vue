<script setup>
import { computed } from "vue";

const prop = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "default",
  },
  label: {
    type: String,
    default: "Default",
  },
  inputType: {
    type: String,
    default: "text",
  },
  errorMsg: {
    type: String,
  },
});

const classObj = computed(() => ({
  "border-neutral-1": !prop.errorMsg,
  "border-primary": prop.errorMsg,
}));
</script>

<template>
  <label class="relative block max-w-[336px] mb-6">
    <span class="sr-only">{{ prop.label }}</span>
    <input
      @blur="$emit('update:modelValue', $event.target.value)"
      class="pl-4 pb-3.5 w-full body-m text-white border-b caret-primary bg-transparent focus:border-white focus:outline-none"
      :class="classObj"
      :name="name"
      :placeholder="prop.label"
      :type="inputType"
      :value="modelValue"
    />
    <span
      v-if="prop.errorMsg"
      class="absolute right-4 text-primary text-right"
      >{{ prop.errorMsg }}</span
    >
  </label>
</template>
