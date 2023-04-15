<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex gap-x-[10px]">
    <a
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white text-sm transition-all hover:border-accent hover:text-accent"
      href="#"
    >
      <Icon icon="bi:youtube" />
    </a>
    <a
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white text-sm transition-all hover:border-accent hover:text-accent"
      href="#"
    >
      <Icon icon="bi:instagram" />
    </a>
    <a
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white text-sm transition-all hover:border-accent hover:text-accent"
      href="#"
    >
      <Icon icon="bi:facebook" />
    </a>
  </div>
</template>
