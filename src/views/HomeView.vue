<script setup>
import { onErrorCaptured, ref } from "vue";
import LoadingView from "./LoadingView.vue";
import Sections from "../components/Sections.vue";

const error = ref(null);

onErrorCaptured((e) => {
  error.value = e;
  return false;
});
</script>

<template>
  <Transition>
    <Suspense>
      <Sections />
      <template #fallback>
        <LoadingView />
      </template>
    </Suspense>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
