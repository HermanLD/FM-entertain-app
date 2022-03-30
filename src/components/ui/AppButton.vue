<template>
  <button
    class="min-w-[336px] py-3.5 rounded-md text-center body-m text-white bg-primary hover:text-dark hover:bg-white"
    @click.prevent="$emit('clickEvent')"
  >
    <slot>Default</slot>
  </button>
</template>
