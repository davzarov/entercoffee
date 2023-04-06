<script setup>
import TableBody from "../components/dashboard/TableBody.vue";
import TableHead from "../components/dashboard/TableHead.vue";
import { ModelBlackImg } from "../constants/data";
const flights = [
  {
    time: "08:11",
    destination: "OMAN",
    code: "OX 203",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "12:39",
    destination: "LONDON",
    code: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED",
  },
  {
    time: "13:21",
    destination: "DUBAI",
    code: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED",
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    code: "FR 402",
    gate: "B 02",
    remarks: "ON TIME",
  },
  {
    time: "15:22",
    destination: "TOKIO",
    code: "TK 211",
    gate: "A 32",
    remarks: "DELAYED",
  },
];
</script>

<template>
  <section class="min-h-screen">
    <div class="container mx-auto flex flex-col items-center py-8">
      <div class="pretitle">enter coffee</div>
      <h2 class="h2 capitalize">salidas</h2>
      <div>
        <img class="mb-8" :src="ModelBlackImg" alt="" />
      </div>
      <table class="mb-8 text-left">
        <caption class="caption-bottom">
          Tablero de próximas salidas
        </caption>
        <TableHead />
        <TableBody :flights="flights" />
      </table>
      <RouterLink class="btn mx-auto" :to="{ name: 'home' }"
        >Volver al inicio</RouterLink
      >
    </div>
  </section>
</template>
