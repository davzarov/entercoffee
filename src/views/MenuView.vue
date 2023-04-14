<script setup>
import MenuGrid from "../components/menu/MenuGrid.vue";
import { ModelWhiteImg } from "../constants/data";
import { coffeeMenu, teaMenu } from "../constants/fullMenu";
</script>

<template>
  <section class="min-h-[780px]">
    <!-- background -->
    <div class="absolute -z-0 h-[780px] w-full max-w-[1800px] bg-menu"></div>
    <!-- text -->
    <div class="relative top-44 z-10 lg:top-36">
      <div class="container mx-auto flex flex-col items-center text-center">
        <h2 class="h2 max-w-[400px] text-center capitalize text-white">
          Menú completo
        </h2>
        <p class="mb-8 capitalize text-white/70"></p>
        <div>
          <img :src="ModelWhiteImg" alt="" />
        </div>
      </div>
    </div>
    <!-- menu gallery -->
    <MenuGrid :menu-items="coffeeMenu" />
  </section>
</template>
