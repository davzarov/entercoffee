<script setup>
import { navData } from "../../../constants/data";
import { navigateTo } from "../../../utils/navigateTo";
</script>

<template>
  <nav class="h-full w-full">
    <ul class="flex h-full flex-col items-center justify-center gap-y-6">
      <li v-for="(item, index) in navData" :key="item.name" :data-index="index">
        <a
          class="cursor-pointer font-primary text-xl capitalize italic transition-all duration-300 hover:text-dark"
          @click.prevent="navigateTo($event, item.id)"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>
