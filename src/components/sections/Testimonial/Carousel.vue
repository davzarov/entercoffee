<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";

defineProps({
  slider: {
    type: Object,
    required: true,
  },
});

const modules = [Autoplay];
</script>

<template>
  <Swiper
    :modules="modules"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    class="flex w-full max-w-[1024px] items-center justify-center"
  >
    <SwiperSlide v-for="slide in slider" :key="slide">
      <div class="mx-auto max-w-[840px] px-24 text-white">
        <div class="mb-9 text-lg leading-snug lg:text-2xl">
          {{ slide.message }}
        </div>
        <div class="mx-auto mb-3 max-w-[70px] lg:max-w-[100px]">
          <img :src="slide.image" alt="" />
        </div>
        <div class="text-[22px] font-bold text-accent">{{ slide.name }}</div>
        <div class="font-medium italic">{{ slide.occupation }}</div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
