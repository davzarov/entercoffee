<script setup>
import { testimonialData } from "../../../constants/data";
import Carousel from "./Carousel.vue";

const { title, modelImg, slider } = testimonialData;
</script>

<template>
  <section
    class="relative top-[340px] z-10 h-[800px] bg-testimonial bg-cover bg-no-repeat pt-[60px] md:pt-[120px] lg:top-[390px]"
  >
    <div class="container mx-auto">
      <!-- text -->
      <div class="flex flex-col items-center text-center capitalize">
        <h2 class="h2 mb-8 text-white">{{ title }}</h2>
        <!-- <p class="mb-8 capitalize text-white/70">{{ subTitle }}</p> -->
        <div class="mb-12">
          <img :src="modelImg" alt="" />
        </div>
      </div>
      <!-- slider -->
      <div class="flex items-center justify-center">
        <Carousel :slider="slider" />
      </div>
    </div>
  </section>
</template>
