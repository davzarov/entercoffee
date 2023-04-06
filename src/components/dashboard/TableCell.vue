<script setup>
import { computed } from "vue";
import TableLetter from "./TableLetter.vue";

const props = defineProps({ word: String });
const wordArray = computed(() => Array.from(props.word));
</script>

<template>
  <td>
    <TableLetter
      v-for="(letter, index) in wordArray"
      :key="index"
      :letter="letter"
      :index="index"
    />
  </td>
</template>
