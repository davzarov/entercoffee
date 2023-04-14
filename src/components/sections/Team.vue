<script setup>
import { teamData } from "../../constants/data";

const { preTitle, title, sub1, sub2, name, occupation, signatureImg, chefImg } =
  teamData;
</script>

<template>
  <section
    id="equipo"
    class="relative top-96 z-10 min-h-[720px] lg:top-[480px]"
  >
    <div class="container mx-auto">
      <!-- text & image wrapper -->
      <div
        class="flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[120px]"
      >
        <!-- text -->
        <div class="flex-1 text-center lg:pt-16 lg:text-left">
          <div className="pretitle">{{ preTitle }}</div>
          <h2 className="h2 capitalize">{{ title }}</h2>
          <p className="mb-[60px]">{{ sub1 }}</p>
          <p>{{ sub2 }}</p>
          <div className="my-[26px]">
            <div className="text-2xl capitalize font-semibold text-accent">
              {{ name }}
            </div>
            <div className="text-[15px] font-semibold capitalize text-grey/70">
              {{ occupation }}
            </div>
          </div>
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
            <img :src="signatureImg" alt="" />
          </div>
        </div>
        <!-- image -->
        <div class="flex-1">
          <img :src="chefImg" alt="chef-img" />
        </div>
      </div>
    </div>
  </section>
</template>
