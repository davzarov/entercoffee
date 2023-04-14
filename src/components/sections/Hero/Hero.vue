<script setup>
import { ref } from "vue";
import { useAnimate } from "../../../composables/useAnimate";
import { heroData } from "../../../constants/data";
import Header from "./Header.vue";

const { title, preTitle, subTitle, btnText } = heroData;
const el = ref();
useAnimate(el, 1, { opacity: 0, stagger: 0.2 }, { opacity: 1 });
</script>

<template>
  <section id="inicio" class="min-h-[980px] bg-hero bg-cover bg-right">
    <!-- header -->
    <Header />
    <div
      class="container mx-auto flex min-h-[980px] items-center justify-center"
    >
      <!-- text -->
      <div ref="el" class="flex flex-col items-center text-center">
        <!-- pretitle -->
        <div
          class="mb-1 font-primary text-[24px] italic text-white lg:text-[28px] lg:font-medium"
        >
          {{ preTitle }}
        </div>
        <!-- title -->
        <h1 class="h1 mb-5">
          {{ title }}
        </h1>
        <!-- subtitle -->
        <p class="mb-8 max-w-[540px] text-white">
          {{ subTitle }}
        </p>
        <!-- button -->
        <div>
          <button class="btn capitalize">{{ btnText }}</button>
        </div>
      </div>
    </div>
  </section>
</template>
