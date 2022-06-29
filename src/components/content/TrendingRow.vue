<script setup>
import { useContentStore } from "@/stores/content";
import { Swiper, SwiperSlide } from "swiper/vue";
import TrendingCard from "./TrendingCard.vue";

const content = useContentStore();
</script>

<template>
  <Swiper
    class="mb-10"
    :slidesPerView="'auto'"
    :autoHeight="true"
    :space-between="24"
    :pagination="{ clickable: true }"
  >
    <SwiperSlide
      v-for="item in content.getTrendingList"
      class="w-[75%] lg:w-[40%]"
      :key="item._id"
    >
      <TrendingCard :content="item"></TrendingCard>
    </SwiperSlide>
  </Swiper>
</template>
