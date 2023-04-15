<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { reservationData } from "@/constants/data";

const { title, subTitle, modelImg, btnText } = reservationData;
const startDate = ref(new Date());
const startTime = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
});
</script>

<template>
  <section id="reservas" class="relative top-96 z-30 pb-20 lg:py-[100px]">
    <div class="container mx-auto">
      <!-- text -->
      <div class="text-center">
        <!-- title -->
        <h2 class="h2 capitalize">
          {{ title }}
        </h2>
        <!-- subtitle -->
        <p class="mb-8 text-dark">
          {{ subTitle }}
        </p>
        <!-- model -->
        <div class="mb-8 flex justify-center">
          <img :src="modelImg" alt="" />
        </div>
      </div>
      <!-- form -->
      <form @submit.prevent="() => {}">
        <div
          class="mb-8 flex flex-col items-center justify-between gap-y-4 lg:flex-row"
        >
          <!-- datepicker -->
          <div>
            <div
              class="mb-3 flex items-center gap-x-[10px] text-base font-semibold text-dark"
            >
              <Icon icon="bi:calendar" />
              <div>Elige una fecha</div>
            </div>
            <VueDatePicker
              v-model="startDate"
              locale="es-PY"
              :enable-time-picker="false"
              select-text="Ok"
              cancel-text="Cerrar"
              hide-input-icon
              input-class-name="input"
            />
          </div>
          <!-- timepicker -->
          <div>
            <div
              class="mb-3 flex items-center gap-x-[10px] text-base font-semibold text-dark"
            >
              <Icon icon="bi:clock" />
              <div>Elige la hora</div>
            </div>
            <VueDatePicker
              v-model="startTime"
              locale="es-PY"
              select-text="Ok"
              cancel-text="Cerrar"
              time-picker
              hide-input-icon
              input-class-name="input"
            />
          </div>
          <!-- person number -->
          <div>
            <div
              class="mb-3 flex items-center gap-x-[10px] text-base font-semibold text-dark"
            >
              <Icon icon="bi:envelope" />
              <div>Correo electrónico</div>
            </div>
            <input
              class="input"
              type="email"
              placeholder="micorreo@ejemplo.com"
            />
          </div>
        </div>
        <div class="mx-auto flex max-w-[316px] justify-center">
          <button class="btn w-full capitalize lg:w-auto">
            {{ btnText }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
