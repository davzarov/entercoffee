<script setup>
import TableBody from "../components/dashboard/TableBody.vue";
import TableHead from "../components/dashboard/TableHead.vue";
import { ModelBlackImg } from "../constants/data";

const flights = [
  {
    name: "Sarah",
    table: "Grand View",
    time: "13:43",
    seat: "01",
    date: "21-06-2011",
  },
  {
    name: "Jessica",
    table: "Hazel",
    time: "16:15",
    seat: "02",
    date: "28-06-2017",
  },
  {
    name: "Jose",
    table: "Woodville",
    time: "09:41",
    seat: "03",
    date: "25-03-2020",
  },
  {
    name: "Haley",
    table: "Hakalau",
    time: "08:48",
    seat: "04",
    date: "19-04-2015",
  },
  {
    name: "Timothy",
    table: "Frankfort",
    time: "11:08",
    seat: "05",
    date: "29-09-2012",
  },
  {
    name: "Nathan",
    table: "Lewiston",
    time: "17:45",
    seat: "06",
    date: "31-12-2021",
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
