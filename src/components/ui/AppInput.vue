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
  error: {
    type: Boolean,
    default: false,
  },
  errorMsg: {
    type: String,
  },
});

const classObj = computed(() => ({
  "border-neutral-1": !prop.error,
  "border-primary": prop.error,
}));
</script>

<template>
  <label class="relative block max-w-[336px] mb-6">
    <span class="sr-only">{{ prop.label }}</span>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      class="pl-4 pb-3.5 w-full body-m text-white border-b caret-primary bg-transparent focus:border-white focus:outline-none"
      :class="classObj"
      :name="name"
      :placeholder="prop.label"
      :type="inputType"
      :value="modelValue"
    />
    <span v-if="prop.error" class="absolute right-4 text-primary text-right">{{
      errorMsg
    }}</span>
  </label>
</template>
