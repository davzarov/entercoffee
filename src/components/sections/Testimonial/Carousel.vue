<script setup>
import { Carousel, Slide } from "vue3-carousel";
defineProps({
  slider: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Carousel
    :autoplay="3000"
    :wrap-around="true"
    :pause-autoplay-on-hover="true"
    class="flex w-full max-w-[1024px] items-center justify-center"
  >
    <Slide v-for="slide in slider" :key="slide">
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
    </Slide>
  </Carousel>
</template>
