<template>
  <button
    class="min-w-[336px] my-6 py-3.5 rounded-md text-center body-m text-white bg-primary hover:text-dark hover:bg-white"
    @click="$emit('clickEvent')"
  >
    <slot>Default</slot>
  </button>
</template>
