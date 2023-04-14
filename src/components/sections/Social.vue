<script setup>
import {
  AkYoutubeFill,
  AkFacebookFill,
  AkInstagramFill,
} from "@kalimahapps/vue-icons";
</script>

<template>
  <div class="flex gap-x-[10px]">
    <a
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white/20 text-sm transition-all hover:border-accent hover:text-accent"
      href="#"
    >
      <AkYoutubeFill />
    </a>
    <a
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white/20 text-sm transition-all hover:border-accent hover:text-accent"
      href="#"
    >
      <AkFacebookFill />
    </a>
    <a
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white/20 text-sm transition-all hover:border-accent hover:text-accent"
      href="#"
    >
      <AkInstagramFill />
    </a>
  </div>
</template>
