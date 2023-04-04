<script setup>
import { navData } from "../constants/data";
</script>

<template>
  <nav class="h-full w-full">
    <ul class="flex h-full flex-col items-center justify-center gap-y-6">
      <li v-for="(item, index) in navData" :key="index">
        <a
          class="font-primary text-xl capitalize italic transition-all duration-300 hover:text-dark"
          :href="item.href"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>
