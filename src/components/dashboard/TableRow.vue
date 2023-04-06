<script setup>
import TableCell from "./TableCell.vue";

const props = defineProps({
  flight: Object,
});
</script>

<template>
  <tr>
    <TableCell v-for="(word, index) in flight" :key="index" :word="word" />
  </tr>
</template>
