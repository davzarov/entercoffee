<script setup>
import { aboutData } from "../../constants/data";

const { preTitle, title, subTitle, btnText, image } = aboutData;
</script>

<template>
  <section class="min-h-[620px]">
    <div class="container mx-auto min-h-[620px]">
      <!-- text & image wrapper -->
      <div class="flex min-h-[620px] flex-col items-center lg:flex-row">
        <!-- text -->
        <div class="flex-1 text-center lg:text-left">
          <div class="pretitle">{{ preTitle }}</div>
          <h2 class="h2 capitalize">{{ title }}</h2>
          <p class="mb-8 max-w-[560px]">{{ subTitle }}</p>
          <button class="btn mx-auto capitalize lg:mx-0">
            {{ btnText }}
          </button>
        </div>
        <!-- image -->
        <div class="z-10 -mb-[300px] -mr-[186px]">
          <img :src="image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
