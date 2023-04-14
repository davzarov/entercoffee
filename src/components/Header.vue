<script setup>
import { ref, watchEffect } from "vue";

import NavMenu from "./NavMenu.vue";
import SocialIcons from "./SocialIcons.vue";
import EnterCoffeeLogo from "../assets/img/header/entercoffee-logo-color.png";

const isScrolled = ref(false);
const open = ref(false);

const toggleOpen = () => {
  open.value = !open.value;
};

watchEffect(() => {
  window.addEventListener("scroll", () => {
    window.scrollY > 50
      ? (isScrolled.value = true)
      : (isScrolled.value = false);
  });
});
</script>

<template>
  <header class="fixed z-50 w-full max-w-[1800px] bg-pink-200/20 py-4">
    <div class="container mx-auto">
      <div
        class="relative flex items-center justify-between px-4 text-white lg:px-0"
      >
        <!-- menu button -->
        <div
          :class="[
            open ? 'gap-y-0' : 'gap-y-2',
            'order-2 flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 p-3 lg:order-none',
          ]"
          @click="toggleOpen()"
        >
          <!-- bar 1 -->
          <div :class="[open ? '' : '', 'h-[2px] w-full bg-white']"></div>
          <!-- bar 2 -->
          <div :class="[open ? '' : '', 'h-[2px] w-full bg-white']"></div>
        </div>
        <!-- logo -->
        <div class="order-1 lg:order-none lg:ml-[11rem]">
          <RouterLink :to="{ name: 'dashboard' }">
            <img
              :class="[
                isScrolled ? 'h-[90px] w-[90px]' : 'h-[107px] w-[107px]',
              ]"
              :src="EnterCoffeeLogo"
              alt="logo"
            />
          </RouterLink>
        </div>
        <!-- social icons -->
        <div class="hidden lg:flex">
          <SocialIcons />
        </div>
        <!-- nav -->
        <div
          :class="[
            open ? '' : 'hidden',
            'absolute bottom-0 right-0 top-[120px] z-50 h-[50vh] w-[310px] rounded-lg bg-accent shadow-xl lg:left-0',
          ]"
        >
          <NavMenu v-if="open" />
        </div>
      </div>
    </div>
  </header>
</template>
