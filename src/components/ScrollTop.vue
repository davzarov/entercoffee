<script setup>
import { ref, watchEffect } from "vue";
import { BsArrowUpCircle } from "@kalimahapps/vue-icons";

const visible = ref(false);

watchEffect(() => {
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? (visible.value = true) : (visible.value = false);
  });
});

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <button
    @click="scrollTop"
    :class="[
      !visible ? 'hidden' : '',
      'fixed bottom-10 right-10 z-50 text-accent transition hover:scale-105 hover:animate-pulse',
    ]"
  >
    <BsArrowUpCircle class="h-[35px] w-[35px]" />
  </button>
</template>
