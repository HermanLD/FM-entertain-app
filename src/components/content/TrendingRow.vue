<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import TrendingCard from "@/components/content/TrendingCard.vue";
// import IconSliderStart from "@/components/icons/IconSliderNavStart.vue";
// import IconSliderEnd from "@/components/icons/IconSliderNavEnd.vue";

const prop = defineProps({
  trendingContent: {
    type: Object,
    default: () => {},
  },
});

// start, middle, end
const sliderState = ref("start");

const toggleSliderState = (newState) => (sliderState.value = newState);

// const showStartNav = computed(() => {
//   if (sliderState.value === "start" || sliderState.value === "middle") {
//     return true;
//   }
//   return false;
// });
// const showEndNav = computed(() => {
//   if (sliderState.value === "end" || sliderState.value === "middle")
//     return true;
//   return false;
// });
</script>

<template>
  <div class="relative mb-10">
    <Swiper
      :slidesPerView="'auto'"
      :autoHeight="true"
      :space-between="24"
      :pagination="{ clickable: true }"
      @fromEdge="toggleSliderState('middle')"
      @reachBeginning="toggleSliderState('start')"
      @reachEnd="toggleSliderState('end')"
    >
      <SwiperSlide
        v-for="item in prop.trendingContent"
        class="w-[75%] lg:w-[40%]"
        :key="item._id"
      >
        <TrendingCard :content="item"></TrendingCard>
      </SwiperSlide>
    </Swiper>
    <!-- <div
        class="absolute pointer-events-none inset-0 z-20 flex justify-between items-center w-screen h-full"
      >
        <div class="w-12">
          <IconSliderStart v-show="!showStartNav" />
        </div>
        <div class="w-12">
          <IconSliderEnd v-show="showEndNav" />
        </div>
      </div> -->
  </div>
</template>
