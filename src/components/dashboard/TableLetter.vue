<script setup>
import { ref } from "vue";

const props = defineProps({ letter: String, index: Number });
const flip = ref(false);

setTimeout(() => {
  flip.value = true;
}, 200 * props.index);
</script>

<template>
  <div
    :class="[
      'float-left h-[40px] min-w-[20px] border-2 border-solid border-accent bg-dark text-white',
      flip ? 'flip' : null,
    ]"
  >
    {{ flip ? letter : null }}
  </div>
</template>

<style scoped>
.flip {
  animation: 0.5s linear flip;
}

@keyframes flip {
  0%,
  100% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(90deg);
  }
}
</style>
