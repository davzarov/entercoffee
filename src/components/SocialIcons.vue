<script setup>
import { socialData } from "../constants/data";
</script>

<template>
  <div class="flex gap-x-[10px]">
    <a
      v-for="(item, index) in socialData"
      :key="index"
      :href="item.href"
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white/20 text-sm transition-all hover:border-accent hover:text-accent"
    >
      {{ item.icon }}
    </a>
  </div>
</template>
