<script setup>
import { fadeIn, staggerContainer } from "../../animations";
import { heroData } from "../../constants/data";
import Header from "../Header.vue";

const { title, preTitle, subTitle, btnText } = heroData;
</script>

<template>
  <section class="min-h-[980px] bg-hero bg-cover bg-right">
    <!-- header -->
    <Header />
    <div
      class="container mx-auto flex min-h-[980px] items-center justify-center"
    >
      <!-- text -->
      <div
        v-motion
        :variants="staggerContainer(0.3, 1)"
        :initial="'hidden'"
        :visible="'show'"
      >
        <!-- pretitle -->
        <div
          v-motion
          :variants="fadeIn('down', 'tween', 0.2, 1.1)"
          class="mb-1 font-primary text-[24px] italic text-white lg:text-[28px] lg:font-medium"
        >
          {{ preTitle }}
        </div>
        <!-- title -->
        <h1
          v-motion
          :variants="fadeIn('down', 'tween', 0.3, 1.1)"
          class="h1 mb-5"
        >
          {{ title }}
        </h1>
        <!-- subtitle -->
        <p
          v-motion
          :variants="fadeIn('down', 'tween', 0.4, 1.1)"
          class="mb-8 max-w-[540px] text-white"
        >
          {{ subTitle }}
        </p>
        <!-- button -->
        <div v-motion :variants="fadeIn('down', 'tween', 0.5, 1.1)">
          <button class="btn">{{ btnText }}</button>
        </div>
      </div>
    </div>
  </section>
</template>
