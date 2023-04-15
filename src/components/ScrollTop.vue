<script setup>
import { ref, watchEffect } from "vue";
import { Icon } from "@iconify/vue";

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
      'fixed bottom-10 right-10 z-50 text-accent transition hover:scale-110 hover:animate-pulse',
    ]"
  >
    <Icon icon="bi:arrow-up-circle" width="35" height="35" />
  </button>
</template>
