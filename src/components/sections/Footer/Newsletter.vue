<script setup>
import { newsletterData } from "../../../constants/data";

const { title, subTitle, btnText, placeholder } = newsletterData;
</script>

<template>
  <div
    class="bg-none lg:h-[220px] lg:bg-newsletter lg:bg-cover lg:bg-center lg:px-24 xl:bg-auto"
  >
    <div class="flex h-full flex-col items-center justify-between lg:flex-row">
      <!-- title & subtitle -->
      <div class="mb-4 text-center lg:text-left">
        <h3 class="mb-2 font-primary text-[26px] capitalize italic text-white">
          {{ title }}
        </h3>
        <p>{{ subTitle }}</p>
      </div>
      <!-- form -->
      <form
        @submit.prevent="() => {}"
        class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-[10px]"
      >
        <input
          class="input border border-white/20 bg-transparent text-white transition-all placeholder:font-light placeholder:text-white/20 focus:ring-1 focus:ring-accent"
          type="text"
          :placeholder="placeholder"
        />
        <button class="btn w-full capitalize lg:max-w-[204px]">
          {{ btnText }}
        </button>
      </form>
    </div>
  </div>
</template>
