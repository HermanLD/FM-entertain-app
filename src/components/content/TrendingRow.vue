<script setup>
import { useContentStore } from "@/stores/content";
import { Swiper, SwiperSlide } from "swiper/vue";
import TrendingCard from "./TrendingCard.vue";

const content = useContentStore();

console.log(content.getTrendingList);
</script>

<template>
  <Swiper
    :slidesPerView="'auto'"
    :autoHeight="true"
    :space-between="15"
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
