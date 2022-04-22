<script setup>
import AppButton from "@/components/ui/AppButton.vue";

function onSubmit(e) {
  console.log(e);
  // const file = ;

  // if (!file) {
  //   e.preventDefault();
  //   alert("No file chosen");
  //   return;
  // }

  // if (file.size > 1024 * 1024) {
  //   e.preventDefault();
  //   alert("File too big (> 1MB)");
  //   return;
  // }

  // alert("File OK");
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="p-8 rounded-[20px] bg-neutral-2 inline-block text-white"
  >
    <h1 class="mb-6 header-lg">Upload Avatar</h1>
    <input type="file" name="avatar" />
    <app-button>Upload</app-button>
  </form>
</template>
