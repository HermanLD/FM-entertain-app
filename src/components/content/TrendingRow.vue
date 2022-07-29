<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import TrendingCard from "@/components/content/TrendingCard.vue";

const prop = defineProps({
  trendingContent: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="relative mb-10">
    <Swiper
      :slidesPerView="'auto'"
      :autoHeight="true"
      :space-between="24"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide
        v-for="item in prop.trendingContent"
        class="w-[75%] lg:w-[40%]"
        :key="item._id"
      >
        <TrendingCard :content="item"></TrendingCard>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
