<script setup>
import TableRow from "./TableRow.vue";

const props = defineProps({ flights: Array });
</script>

<template>
  <tbody>
    <TableRow
      v-for="(flight, index) in flights"
      :key="index"
      :flight="flight"
    />
  </tbody>
</template>
