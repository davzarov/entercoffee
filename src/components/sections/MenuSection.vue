<script setup>
import { menuData } from "../../constants/data";

const { title, subTitle, modelImg, menuItems, btnText } = menuData;
</script>

<template>
  <section class="min-h-[780px]">
    <!-- background -->
    <div class="absolute -z-0 h-[780px] w-full max-w-[1800px] bg-menu"></div>
    <!-- text -->
    <div class="relative top-72 z-10 lg:top-52">
      <div class="container mx-auto flex flex-col items-center text-center">
        <h2 class="h2 max-w-[400px] text-center capitalize text-white">
          {{ title }}
        </h2>
        <p class="mb-8 capitalize text-white/70">
          {{ subTitle }}
        </p>
        <div>
          <img :src="modelImg" alt="" />
        </div>
      </div>
    </div>
    <!-- menu gallery -->
    <div class="relative top-80 lg:top-96">
      <div class="container mx-auto">
        <div class="z-30 mb-8 min-h-[590px] md:mb-4 lg:-mt-24 xl:mb-16">
          <!-- grid -->
          <div class="grid min-h-[590px] grid-cols-1 lg:grid-cols-4">
            <div v-for="(item, index) in menuItems" :key="index">
              <div class="flex h-full flex-row lg:flex-col">
                <!-- image -->
                <div
                  :class="[
                    'w-[45%] md:w-auto',
                    index === 1 || index === 3 ? 'lg:order-1' : 'order-none',
                  ]"
                >
                  <img :src="item.image" alt="" />
                </div>
                <!-- text -->
                <div
                  class="flex flex-1 flex-col justify-center bg-[#fff3e4] px-6 lg:max-h-[250px] lg:p-12 xl:max-h-max"
                >
                  <div class="text-center">
                    <div class="text-xl font-semibold text-dark xl:text-2xl">
                      {{ item.name }}
                    </div>
                    <div
                      class="my-1 text-[20px] font-semibold text-accent lg:my-6 lg:text-[40px]"
                    >
                      {{ item.price }}
                    </div>
                    <div>{{ item.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn mx-auto capitalize">{{ btnText }}</button>
      </div>
    </div>
  </section>
</template>
